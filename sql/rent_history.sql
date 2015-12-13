CREATE TABLE IF NOT EXISTS rent_history (
  rent_id SERIAL PRIMARY KEY,
  book_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  rent_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE rent_history IS '대여 관리 테이블';
COMMENT ON COLUMN rent_history.book_id IS '대여된 책 ID';
COMMENT ON COLUMN rent_history.user_id IS '대여한 user_id';
COMMENT ON COLUMN rent_history.rent_date IS 'rent_date';
