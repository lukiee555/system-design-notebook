# System Design Notebook

Static, framework-free system design notes for GitHub Pages.

## Structure

Content is organized by subject, not by book or course:

| Section       | What goes here                                                  | Page                    |
| ------------- | --------------------------------------------------------------- | ----------------------- |
| **Topics**    | Reusable concepts (scaling, estimation, caching, sharding, ...) | `topics/<slug>.html`    |
| **Questions** | "Design X" problems (rate limiter, URL shortener, ...)          | `questions/<slug>.html` |

- `topics/index.html` and `questions/index.html` list every page with a short Quick Revision card.
- Every page starts with its own Quick Revision.
- `assets/js/catalog-data.js` drives the sidebar and search.
- Media goes in `assets/media/topics/<slug>/` or `assets/media/questions/<slug>/`.

## Adding learning

1. **Classify.** Reusable concept → Topic. Full system design → Question.
2. **Merge or create.** If a page on the subject already exists, add to it (from any book or course). Otherwise copy `templates/topic.html.tmpl` or `templates/question.html.tmpl`.

3. **Register.** Add or update the entry in `assets/js/catalog-data.js` (add a category if a topic needs a new one). List the page's image files in `images` in page order - the Image Revision page is built from them.
4. **Revise.** Add or update the card in the section `index.html`.
5. **Validate.** `python3 scripts/validate_site.py`

Page sections — Topic: Visual, Quick Revision, Key ideas, Active recall, Trade-offs, Failure modes, Interview practice.
Question: Quick Revision, Requirements, Estimation, High-level design, Deep dives, Trade-offs, Failure modes, Interview follow-ups.
Skip any section that adds nothing.

Rules:

- Slugs are lowercase-hyphenated, without numbers; order comes from the catalog.
- For data-flow animations, include `assets/js/visualizer.js`.

## Backlog

- Questions: Rate limiter, Key-value store, Unique ID generator, URL shortener, Web crawler, Notification system, News feed, Chat system, Search autocomplete, YouTube, Google Drive

## Run locally

```bash
python3 -m http.server 8000
```

Deploy: Settings → Pages → Deploy from branch `main`, folder `/ (root)`.
