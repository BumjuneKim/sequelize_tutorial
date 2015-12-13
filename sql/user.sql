CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(32) NOT NULL,
  create_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE users IS '유저 테이블';
COMMENT ON COLUMN users.user_id IS 'user ID';
COMMENT ON COLUMN users.username IS 'username';
COMMENT ON COLUMN users.create_date IS 'create_date';
