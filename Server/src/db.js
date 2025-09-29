import pg from "pg";

export const db = new pg.Pool({
  connectionString:
    "postgresql://neondb_owner:npg_qa1sXLIm0ogQ@ep-super-union-ads7mpo6-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});
