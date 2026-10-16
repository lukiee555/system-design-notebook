// images: files under assets/media/<section>/<id>/, in page order; used by the image revision page.
// Single source for sidebar and search. Array order = display order.
window.SDN_CATALOG = {
  version: "1.5.0",
  categories: [
    { id: "fundamentals", title: "System Design Fundamentals" },
    { id: "delivery-framework", title: "System Design Delivery Framework" },
    { id: "data-modeling", title: "Data Modeling" },
    { id: "db-indexing", title: "Database Indexing" },
    { id: "caching-in-depth", title: "Caching in Depth" }
  ],
  topics: [
    {
      id: "scaling-fundamentals",
      title: "Scale From Zero to Millions of Users",
      category: "fundamentals",
      path: "topics/scaling-fundamentals.html",
      images: ["final-scalable-system.webp"],
      keywords: [
        "scaling", "single server", "vertical scaling", "horizontal scaling",
        "load balancer", "database replication", "primary replica", "read replica",
        "cache", "cache invalidation", "cdn", "stateless web tier", "geodns",
        "multi data center", "message queue", "sharding", "partition key",
        "hotspot", "resharding", "monitoring", "automation", "sql vs nosql"
      ]
    },
    {
      id: "back-of-the-envelope-estimation",
      title: "Back-of-the-Envelope Estimation",
      category: "fundamentals",
      path: "topics/back-of-the-envelope-estimation.html",
      images: ["back-of-envelope-estimation-cheat-sheet.svg"],
      keywords: [
        "estimation", "qps", "peak qps", "storage", "power of two",
        "latency", "availability", "sla", "nines", "assumptions", "units"
      ]
    },
    {
      id: "latency-and-throughput",
      title: "Latency and Throughput",
      category: "fundamentals",
      path: "topics/latency-and-throughput.html",
      images: ["latency-and-throughput-cheat-sheet.webp"],
      keywords: ["latency", "throughput", "p95", "p99", "tail latency", "rps", "tps", "batching", "concurrency", "backpressure", "load shedding", "timeouts"]
    },
    {
      id: "caching",
      title: "Caching",
      category: "fundamentals",
      path: "topics/caching.html",
      images: ["caching-cheat-sheet.webp"],
      keywords: ["cache", "cache-aside", "read-through", "write-through", "write-behind", "refresh-ahead", "ttl", "invalidation", "lru", "lfu", "eviction", "stampede", "hot key", "negative caching", "bloom filter", "redis", "memcached"]
    },
    {
      id: "forward-and-reverse-proxy",
      title: "Forward and Reverse Proxy",
      category: "fundamentals",
      path: "topics/forward-and-reverse-proxy.html",
      images: ["forward-proxy-vs-reverse-proxy-cheat-sheet.webp"],
      keywords: ["proxy", "forward proxy", "reverse proxy", "egress", "ingress", "tls termination", "nginx", "x-forwarded-for"]
    },
    {
      id: "load-balancer",
      title: "Load Balancer",
      category: "fundamentals",
      path: "topics/load-balancer.html",
      images: ["load-balancer-cheat-sheet.webp"],
      keywords: ["load balancer", "l4", "l7", "round robin", "least connections", "ip hash", "health check", "connection draining", "sticky sessions", "session affinity"]
    },
    {
      id: "hashing",
      title: "Hashing",
      category: "fundamentals",
      path: "topics/hashing.html",
      images: ["hashing-cheat-sheet.webp"],
      keywords: ["hashing", "hash function", "hash table", "collision", "chaining", "open addressing", "partition key", "password hashing", "bcrypt", "argon2", "base62"]
    },
    {
      id: "consistent-hashing",
      title: "Consistent Hashing",
      category: "fundamentals",
      path: "topics/consistent-hashing.html",
      images: ["consistent-hashing-distributed-cache-high-level-design.webp"],
      keywords: ["consistent hashing", "hash ring", "virtual nodes", "distributed cache", "rebalancing", "replication", "quorum"]
    },
    {
      id: "leader-election",
      title: "Leader Election",
      category: "fundamentals",
      path: "topics/leader-election.html",
      images: ["leader-election-cheat-sheet.webp"],
      keywords: ["leader election", "raft", "heartbeat", "term", "quorum", "majority", "fencing token", "split brain", "zookeeper", "kraft", "kafka"]
    },

    {
      id: "delivery-framework",
      title: "READ → HD Framework",
      category: "delivery-framework",
      path: "topics/delivery-framework.html",
      images: ["rest-food-delivery-safe-scale-cheat-sheet.webp", "graphql-marketplace-safe-scale-cheat-sheet.webp", "grpc-ride-dispatch-safe-scale-cheat-sheet.webp"],
      keywords: ["delivery framework", "interview framework", "read hd", "requirements", "entities", "api", "data flow", "high-level design", "deep dives", "safe scale", "non-functional requirements", "idempotency", "saga", "outbox"]
    },
    {
      id: "api-protocols",
      title: "REST vs GraphQL vs gRPC",
      category: "delivery-framework",
      path: "topics/api-protocols.html",
      images: ["rest-food-delivery-system-design-framework.webp", "graphql-marketplace-system-design-framework.webp", "grpc-ride-dispatch-system-design-framework.webp"],
      keywords: ["rest", "graphql", "grpc", "api design", "protobuf", "n+1", "dataloader", "deadlines", "streaming"]
    },

    {
      id: "data-modeling",
      title: "Data Modeling Approach",
      category: "data-modeling",
      path: "topics/data-modeling.html",
      images: ["data-modeling-quick-revision.webp", "database-model-options.webp"],
      keywords: ["data modeling", "database choice", "sql", "nosql", "postgresql", "document database", "key-value", "wide-column", "cassandra", "graph database", "schema", "entities", "polyglot persistence", "migrations"]
    },
    {
      id: "schema-design",
      title: "Schema Design: Keys, Indexes, Normalization",
      category: "data-modeling",
      path: "topics/schema-design.html",
      images: ["keys-and-constraints.webp", "relationship-cardinalities.webp", "access-pattern-indexes.webp", "normalization-strategies.webp"],
      keywords: ["primary key", "foreign key", "unique constraint", "check constraint", "cardinality", "junction table", "index", "composite index", "normalization", "denormalization", "cursor pagination", "double booking", "expand and contract"]
    },
    {
      id: "sharding",
      title: "Sharding and Shard Keys",
      category: "data-modeling",
      path: "topics/sharding.html",
      images: ["shard-key-selection.webp", "sharding-constraints.webp"],
      keywords: ["sharding", "shard key", "partition key", "hash sharding", "range sharding", "hot shard", "cross-shard", "resharding", "tenant_id"]
    },

    {
      id: "db-indexing",
      title: "How Database Indexes Work",
      category: "db-indexing",
      path: "topics/db-indexing.html",
      images: ["database-indexing-quick-revision.webp"],
      keywords: ["database index", "indexing", "sequential scan", "index scan", "bitmap scan", "explain", "explain analyze", "optimizer", "selectivity", "clustered index", "non-clustered index", "secondary index", "hash index", "innodb", "postgresql"]
    },
    {
      id: "btree-vs-lsm",
      title: "B+ Tree vs LSM Tree",
      category: "db-indexing",
      path: "topics/btree-vs-lsm.html",
      images: ["btree-vs-lsm-indexes.webp"],
      keywords: ["b-tree", "b+ tree", "lsm tree", "memtable", "sstable", "wal", "compaction", "bloom filter", "tombstone", "write amplification", "read amplification", "cassandra", "rocksdb", "bigtable"]
    },
    {
      id: "geospatial-indexes",
      title: "Geospatial Indexes",
      category: "db-indexing",
      path: "topics/geospatial-indexes.html",
      images: ["geospatial-index-approaches.webp"],
      keywords: ["geospatial", "geohash", "quadtree", "r-tree", "gist", "postgis", "nearby search", "proximity", "location"]
    },
    {
      id: "inverted-index",
      title: "Inverted Index (Full-Text Search)",
      category: "db-indexing",
      path: "topics/inverted-index.html",
      images: ["inverted-index-query-flow.webp"],
      keywords: ["inverted index", "full-text search", "posting list", "analyzer", "tokenization", "bm25", "elasticsearch", "opensearch", "solr", "phrase query"]
    },
    {
      id: "index-optimization",
      title: "Index Optimization Patterns",
      category: "db-indexing",
      path: "topics/index-optimization.html",
      images: ["composite-covering-index-patterns.webp"],
      keywords: ["composite index", "covering index", "include", "partial index", "expression index", "index-only scan", "keyset pagination", "cursor pagination", "concurrent index build", "leftmost prefix", "skip scan"]
    },

    {
      id: "caching-strategy",
      title: "Caching Strategy",
      category: "caching-in-depth",
      path: "topics/caching-strategy.html",
      images: ["caching-in-depth-quick-revision.webp", "cache-read-write-patterns.webp"],
      keywords: ["caching", "cache-aside", "read-through", "write-through", "write-around", "write-behind", "stale-while-revalidate", "refresh-ahead", "cache warming", "cache key", "ttl", "lru", "lfu", "admission", "cdn", "l1 cache", "l2 cache", "invalidation", "outbox", "cdc"]
    },
    {
      id: "cache-consistency",
      title: "Cache Consistency",
      category: "caching-in-depth",
      path: "topics/cache-consistency.html",
      images: ["cache-consistency-race-and-versioning.webp"],
      keywords: ["cache consistency", "stale fill", "race condition", "versioning", "compare-and-set", "tombstone", "read-after-write", "read your writes", "multi-region", "polaris", "tao", "invalidation lag"]
    },
    {
      id: "distributed-cache",
      title: "Distributed Cache Architecture",
      category: "caching-in-depth",
      path: "topics/distributed-cache.html",
      images: ["distributed-cache-architecture-and-hot-keys.webp"],
      keywords: ["distributed cache", "redis", "memcached", "redis cluster", "hash slots", "client-side routing", "proxy", "replication", "failover", "rebalancing", "hot key", "near cache"]
    },
    {
      id: "cache-failures",
      title: "Cache Failures and Operations",
      category: "caching-in-depth",
      path: "topics/cache-failures.html",
      images: ["cache-failure-modes-and-mitigations.webp"],
      keywords: ["cache stampede", "thundering herd", "cache avalanche", "cache penetration", "negative caching", "bloom filter", "circuit breaker", "load shedding", "cache outage", "cold start", "hit ratio", "cache metrics"]
    },
    {
      id: "cache-design-walkthrough",
      title: "Cache Design Walkthrough: Product Details",
      category: "caching-in-depth",
      path: "topics/cache-design-walkthrough.html",
      images: [],
      keywords: ["cache design", "product details", "cache estimation", "cache memory sizing", "single-flight", "lru cache", "lru with ttl", "cache lld"]
    }
  ],
  questions: []
};
