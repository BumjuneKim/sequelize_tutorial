CREATE TABLE IF NOT EXISTS publisher (
  pub_id SERIAL PRIMARY KEY,
  name VARCHAR(32) NOT NULL,
  established_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE publisher IS '출판사 테이블';
COMMENT ON COLUMN publisher.pub_id IS 'publisher ID';
COMMENT ON COLUMN publisher.name IS '출판사 이름';
COMMENT ON COLUMN publisher.established_date IS '설립일';
