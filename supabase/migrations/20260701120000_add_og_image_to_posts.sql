alter table posts
add column if not exists og_image text;

comment on column posts.og_image is 'Open Graph image URL for social sharing';
