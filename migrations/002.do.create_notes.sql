CREATE TABLE notes (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  note_name TEXT NOT NULL,
  modified TIMESTAMP NOT NULL DEFAULT now(),
  folderId INTEGER REFERENCES folders(id),
  content TEXT
);