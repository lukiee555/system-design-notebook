// images: files under assets/media/<section>/<id>/, in page order; used by the image revision page.
// Single source for sidebar and search. Array order = display order.
window.SDN_CATALOG = {

  version: "1.12.0",
  categories: [
    { id: "fundamentals", title: "System Design Fundamentals" },
    { id: "delivery-framework", title: "System Design Delivery Framework" },
    { id: "data-modeling", title: "Data Modeling" },
    { id: "db-indexing", title: "Database Indexing" },
    { id: "caching-in-depth", title: "Caching in Depth" },
    { id: "sharding-in-depth", title: "Sharding in Depth" },
    { id: "consistent-hashing-in-depth", title: "Consistent Hashing in Depth" },
    { id: "cap-theorem-in-depth", title: "CAP Theorem in Depth" },
    { id: "common-patterns", title: "Common Patterns" },
    { id: "scaling-reads", title: "Scaling Reads" },
    { id: "scaling-reads-bitly", title: "Scaling Reads: Bitly URL Shortener" },
    { id: "postgresql", title: "PostgreSQL" }
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
    },

    {
      id: "sharding-fundamentals",
      title: "When and Why to Shard",
      category: "sharding-in-depth",
      path: "topics/sharding-fundamentals.html",
      images: ["sharding-in-depth-quick-revision.webp"],
      keywords: ["sharding", "partitioning", "horizontal partitioning", "vertical partitioning", "replication", "when to shard", "shard count", "capacity estimation", "logical buckets", "shard group"]
    },
    {
      id: "shard-key-strategies",
      title: "Shard Keys and Strategies",
      category: "sharding-in-depth",
      path: "topics/shard-key-strategies.html",
      images: ["shard-key-and-strategy-selection.webp"],
      keywords: ["shard key", "partition key", "cardinality", "range sharding", "hash sharding", "modulo", "consistent hashing", "directory sharding", "tenant sharding", "geographic sharding", "compound key", "skew"]
    },
    {
      id: "sharded-queries",
      title: "Routing and Cross-Shard Operations",
      category: "sharding-in-depth",
      path: "topics/sharded-queries.html",
      images: ["sharded-database-routing-and-query-flows.webp"],
      keywords: ["shard routing", "shard map", "epoch", "moved redirect", "co-location", "scatter-gather", "cross-shard query", "cross-shard transaction", "saga", "two-phase commit", "2pc", "global secondary index", "global uniqueness", "partial results", "vitess", "citus"]
    },
    {
      id: "resharding-and-hotspots",
      title: "Hotspots and Resharding",
      category: "sharding-in-depth",
      path: "topics/resharding-and-hotspots.html",
      images: ["sharding-hotspots-cross-shard-operations-and-failures.webp", "online-resharding-and-data-migration.webp"],
      keywords: ["hot shard", "hot key", "celebrity problem", "noisy tenant", "time hotspot", "resharding", "online migration", "snapshot cdc", "cutover", "rollback", "tombstone", "skew metrics"]
    },
    {
      id: "sharding-walkthrough",
      title: "Sharding Walkthrough: Social Platform",
      category: "sharding-in-depth",
      path: "topics/sharding-walkthrough.html",
      images: [],
      keywords: ["sharding design", "social platform", "user_id shard", "shard split", "derived read model", "trending", "search index"]
    },

    {
      id: "ch-ring-basics",
      title: "Hash Ring Fundamentals",
      category: "consistent-hashing-in-depth",
      path: "topics/ch-ring-basics.html",
      images: ["consistent-hashing-in-depth-quick-revision.webp", "modulo-hashing-vs-consistent-hash-ring.webp"],
      keywords: ["consistent hashing", "hash ring", "modulo hashing", "remapping", "token", "lower bound", "hash function", "murmur", "xxhash", "rendezvous hashing", "jump consistent hash", "hash slots", "redis cluster", "bounded loads"]
    },
    {
      id: "ch-virtual-nodes",
      title: "Virtual Nodes, Weights, and Hot Keys",
      category: "consistent-hashing-in-depth",
      path: "topics/ch-virtual-nodes.html",
      images: ["virtual-nodes-weighted-capacity-and-hot-keys.webp"],
      keywords: ["virtual nodes", "vnodes", "weighted consistent hashing", "heterogeneous nodes", "structural skew", "workload skew", "hot key", "key salting", "ownership variance"]
    },
    {
      id: "ch-routing-replication",
      title: "Ring Routing, Replication, and Failover",
      category: "consistent-hashing-in-depth",
      path: "topics/ch-routing-replication.html",
      images: ["consistent-hashing-routing-replication-and-failover.webp"],
      keywords: ["replica placement", "replication factor", "topology aware", "membership", "ring epoch", "gossip", "zookeeper", "moved", "ask", "stale map", "hash tags", "routing sdk"]
    },
    {
      id: "ch-membership-changes",
      title: "Membership Changes and Rebalancing",
      category: "consistent-hashing-in-depth",
      path: "topics/ch-membership-changes.html",
      images: ["membership-change-rebalancing-and-failure-modes.webp"],
      keywords: ["node join", "node removal", "decommission", "node failure", "rebalancing", "data migration", "anti-flap", "suspicion window", "cache warming", "migration validation"]
    },
    {
      id: "ch-design-walkthrough",
      title: "Elastic Cache Walkthrough",
      category: "consistent-hashing-in-depth",
      path: "topics/ch-design-walkthrough.html",
      images: [],
      keywords: ["elastic cache", "distributed product cache", "ring metadata", "movement estimation", "consistent hashing design"]
    },

    {
      id: "cap-fundamentals",
      title: "What CAP Actually Says",
      category: "cap-theorem-in-depth",
      path: "topics/cap-fundamentals.html",
      images: ["cap-theorem-in-depth-quick-revision.webp", "cap-network-partition-cp-vs-ap-timeline.webp"],
      keywords: ["cap theorem", "consistency", "availability", "partition tolerance", "linearizability", "cp", "ap", "ca", "network partition", "split brain", "spanner", "sql vs nosql"]
    },
    {
      id: "cap-consistency-models",
      title: "Consistency Models, ACID, and PACELC",
      category: "cap-theorem-in-depth",
      path: "topics/cap-consistency-models.html",
      images: ["cap-consistency-models-acid-and-pacelc.webp"],
      keywords: ["pacelc", "acid", "isolation", "serializable", "strict serializable", "sequential consistency", "causal consistency", "read your writes", "monotonic reads", "bounded staleness", "eventual consistency", "session guarantees"]
    },
    {
      id: "cap-quorums-conflicts",
      title: "Quorums, Consensus, and Conflicts",
      category: "cap-theorem-in-depth",
      path: "topics/cap-quorums-conflicts.html",
      images: ["quorums-consensus-and-conflict-resolution.webp"],
      keywords: ["quorum", "r + w > n", "sloppy quorum", "hinted handoff", "raft", "paxos", "fencing token", "lease", "last write wins", "vector clock", "crdt", "escrow", "anti-entropy", "merkle tree", "tombstone"]
    },
    {
      id: "cap-ticket-booking",
      title: "CAP Walkthrough: Ticket Booking",
      category: "cap-theorem-in-depth",
      path: "topics/cap-ticket-booking.html",
      images: ["feature-level-cap-decisions-ticket-booking.webp"],
      keywords: ["ticket booking", "seat reservation", "double booking", "payment saga", "idempotency key", "unknown outcome", "partition behavior", "fault injection", "jepsen"]
    },
    {
      id: "common-patterns",
      title: "Common Patterns for Scaling Systems",
      category: "common-patterns",
      path: "topics/common-patterns.html",
      images: ["common-patterns-for-scaling-systems.webp", "pattern-selection-guide.webp"],
      keywords: ["common patterns", "pattern selection", "realtime updates", "websockets", "sse", "long-running tasks", "async processing", "contention", "locking", "scaling reads", "scaling writes", "large blobs", "presigned url", "multi-step processes", "saga", "proximity", "geospatial"]
    },

    {
      id: "scaling-reads",
      title: "Scaling Reads: Diagnose and Design",
      category: "scaling-reads",
      path: "topics/scaling-reads.html",
      images: ["scaling-reads-quick-revision.webp"],
      keywords: ["scaling reads", "read heavy", "bottleneck", "diagnosis", "read write ratio", "freshness", "estimation", "cdn offload", "cache offload", "replica count", "read architecture", "flash sale", "hot key"]
    },
    {
      id: "sr-database-optimization",
      title: "Database Read Optimization",
      category: "scaling-reads",
      path: "topics/sr-database-optimization.html",
      images: ["database-read-optimization-and-precomputation.webp"],
      keywords: ["explain analyze", "query plan", "index", "covering index", "n+1", "keyset pagination", "vertical scaling", "denormalization", "materialized view", "read model", "cqrs", "cdc", "outbox"]
    },
    {
      id: "sr-read-replicas",
      title: "Read Replicas: Routing and Freshness",
      category: "scaling-reads",
      path: "topics/sr-read-replicas.html",
      images: ["read-replicas-routing-and-freshness.webp"],
      keywords: ["read replica", "async replication", "sync replication", "replication lag", "read-after-write", "lsn", "min version token", "primary stickiness", "failover", "fencing", "rpo", "rto"]
    },
    {
      id: "sr-multi-level-caching",
      title: "Multi-Level Caching and Stampede Protection",
      category: "scaling-reads",
      path: "topics/sr-multi-level-caching.html",
      images: ["multi-level-caching-and-stampede-protection.webp"],
      keywords: ["cache-aside", "l1 cache", "l2 cache", "near cache", "cache key", "ttl jitter", "stale-while-revalidate", "cache stampede", "single-flight", "hot key", "cache outage", "lru ttl"]
    },
    {
      id: "sr-cdn-sharding",
      title: "CDN, Sharding, and Origin Protection",
      category: "scaling-reads",
      path: "topics/sr-cdn-sharding.html",
      images: ["cdn-edge-sharding-and-origin-protection.webp"],
      keywords: ["cdn", "edge cache", "cache-control", "vary", "etag", "origin shield", "sharding", "shard key", "scatter-gather", "top-k", "origin protection", "observability"]
    },
    {
      id: "bitly-overview",
      title: "Bitly: Requirements, Data, and API",
      category: "scaling-reads-bitly",
      path: "topics/bitly-overview.html",

      images: ["url-shortener-system-design-sketch.webp", "full-stack-bitly-final-combined.webp"],
      keywords: ["bitly", "url shortener", "tinyurl", "scaling reads", "requirements", "short_code", "api", "idempotency key", "frontend radio", "full stack"]
    },
    {
      id: "bitly-read-path",
      title: "Bitly Read Path: Cache, Edge, Database",
      category: "scaling-reads-bitly",
      path: "topics/bitly-read-path.html",
      images: ["bitly-read-path-cache-edge-and-database.webp"],
      keywords: ["bitly", "redirect", "read path", "cache-aside", "redis", "cdn", "edge cache", "302", "301", "read replicas", "read-after-write", "expiry", "410", "negative cache", "click analytics"]
    },
    {
      id: "bitly-write-path",
      title: "Bitly Write Path: Short-Code Generation",
      category: "scaling-reads-bitly",
      path: "topics/bitly-write-path.html",
      images: ["bitly-write-path-and-short-code-generation.webp"],
      keywords: ["bitly", "write path", "short code", "base62", "counter", "range allocation", "hash collision", "custom alias", "snowflake", "unique constraint"]
    },
    {
      id: "bitly-scaling-estimation",
      title: "Bitly Scaling and Estimation",
      category: "scaling-reads-bitly",
      path: "topics/bitly-scaling-estimation.html",
      images: ["bitly-scaling-evolution-and-estimation.webp"],
      keywords: ["bitly", "estimation", "qps", "cache hit rate", "cache memory", "scaling evolution", "optimizations", "when to shard"]
    },
    {
      id: "bitly-failures-ops",
      title: "Bitly Failures and Operations",
      category: "scaling-reads-bitly",
      path: "topics/bitly-failures-ops.html",
      images: ["bitly-failure-modes-availability-and-observability.webp"],
      keywords: ["bitly", "failure modes", "cache stampede", "cache outage", "hot key", "viral link", "replica lag", "observability", "runbook", "rate limiting"]
    },

    {
      id: "postgresql",
      title: "PostgreSQL: When and How to Use It",
      category: "postgresql",
      path: "topics/postgresql.html",
      images: ["postgresql-quick-revision.webp"],
      keywords: ["postgresql", "postgres", "relational database", "sql", "when to use postgres", "sql vs nosql", "pgbouncer", "social platform", "outbox", "alternatives", "rpo", "rto"]
    },
    {
      id: "pg-data-model-indexing",
      title: "PostgreSQL Data Modeling and Indexing",
      category: "postgresql",
      path: "topics/pg-data-model-indexing.html",
      images: ["postgresql-data-model-indexing-and-query-tuning.webp"],
      keywords: ["postgresql", "schema", "constraints", "composite index", "b-tree", "gin", "gist", "brin", "partial index", "covering index", "explain analyze", "keyset pagination", "materialized view", "denormalization"]
    },
    {
      id: "pg-transactions-mvcc",
      title: "PostgreSQL Transactions, MVCC, and WAL",
      category: "postgresql",
      path: "topics/pg-transactions-mvcc.html",
      images: ["postgresql-transactions-mvcc-wal-and-concurrency.webp"],
      keywords: ["postgresql", "mvcc", "vacuum", "bloat", "wal", "isolation level", "read committed", "repeatable read", "serializable", "write skew", "select for update", "optimistic locking", "deadlock", "transactional outbox", "idempotency"]
    },
    {
      id: "pg-replication-failover",
      title: "PostgreSQL Replication and Failover",
      category: "postgresql",
      path: "topics/pg-replication-failover.html",
      images: ["postgresql-replication-failover-and-read-scaling.webp"],
      keywords: ["postgresql", "streaming replication", "read replica", "synchronous replication", "remote_apply", "lsn", "read-after-write", "failover", "fencing", "split brain", "replication slot", "pitr", "wal archive", "pgbouncer", "connection pool"]
    },
    {
      id: "pg-scaling-partitioning",
      title: "Scaling PostgreSQL: Partitioning and Sharding",
      category: "postgresql",
      path: "topics/pg-scaling-partitioning.html",
      images: ["postgresql-scaling-partitioning-and-alternatives.webp"],
      keywords: ["postgresql", "scaling", "table partitioning", "partition pruning", "sharding", "schema migration", "expand contract", "backfill", "search integration", "analytics"]
    }
  ],
  questions: []
};
