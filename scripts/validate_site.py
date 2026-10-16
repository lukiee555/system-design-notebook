from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse, unquote
import re
import sys

ROOT = Path(__file__).resolve().parents[1]

class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.ids = set()

    def handle_starttag(self, tag, attrs):
        data = dict(attrs)
        if "id" in data:
            self.ids.add(data["id"])
        if tag in {"a", "link", "script", "img", "source"}:
            value = data.get("href") or data.get("src")
            if value:
                self.links.append(value)

errors = []
html_files = sorted(ROOT.rglob("*.html"))
for html_file in html_files:
    parser = LinkParser()
    parser.feed(html_file.read_text(encoding="utf-8"))
    for link in parser.links:
        parsed = urlparse(link)
        if parsed.scheme in {"http", "https", "mailto", "tel", "data", "javascript"}:
            continue
        if link.startswith("#"):
            fragment = link[1:]
            if fragment and fragment not in parser.ids:
                errors.append(f"{html_file.relative_to(ROOT)}: missing local fragment #{fragment}")
            continue
        path_part = unquote(parsed.path)
        target = (html_file.parent / path_part).resolve()
        try:
            target.relative_to(ROOT.resolve())
        except ValueError:
            errors.append(f"{html_file.relative_to(ROOT)}: link escapes repository: {link}")
            continue
        if not target.exists():
            errors.append(f"{html_file.relative_to(ROOT)}: missing target {link}")

catalog = (ROOT / "assets/js/catalog-data.js").read_text(encoding="utf-8")
for path in re.findall(r'path:\s*"([^"]+)"', catalog):
    if not (ROOT / path).exists():
        errors.append(f"catalog-data.js: missing page {path}")

for section, item_id, files in re.findall(r'path:\s*"(topics|questions)/([^"/]+)\.html",\s*images:\s*\[([^\]]*)\]', catalog):
    for name in re.findall(r'"([^"]+)"', files):
        if not (ROOT / "assets/media" / section / item_id / name).exists():
            errors.append(f"catalog-data.js: missing image assets/media/{section}/{item_id}/{name}")

if errors:
    print("Validation failed:")
    for error in errors:
        print("-", error)
    sys.exit(1)

print(f"Validation passed: {len(html_files)} HTML files checked.")
