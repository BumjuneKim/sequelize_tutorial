CREATE TABLE IF NOT EXISTS books (
  book_id SERIAL PRIMARY KEY,
  pub_id INTEGER REFERENCES publisher NOT NULL,
  title VARCHAR(64) NOT NULL,
  author VARCHAR(16) NOT NULL,
  stock SMALLINT NOT NULL DEFAULT 1,
  register_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE books IS '책 테이블';
COMMENT ON COLUMN books.book_id IS 'Book ID';
COMMENT ON COLUMN books.pub_id IS '책을 발행한 출판사 ID';
COMMENT ON COLUMN books.title IS '책 제목';
COMMENT ON COLUMN books.author IS '저자';
COMMENT ON COLUMN books.stock IS '재고';
COMMENT ON COLUMN books.register_date IS '등록일';
