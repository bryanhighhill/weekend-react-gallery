CREATE TABLE images (
	id SERIAL PRIMARY KEY,
	path TEXT NOT NULL,
	description TEXT NOT NULL,
	likes INT NOT NULL DEFAULT 0
);

INSERT INTO "images" ("path", "description", "likes")
VALUES  ('images/sandia.jpeg', 'Sandia Peak in Albuquerque, NM', 0),
    ('images/captiva_sunrise.jpeg', 'Sunrise on Captiva Island, Florida', 0),
    ('images/los_angeles_sunset.jpeg', 'Sunset over Los Angeles, California', 0),
    ('images/skatl_RedStag.jpeg', 'Playing trumpet in Sonny Knight and the Lakers at the Red Stag Block Party', 0),
    ('images/halloween_2022.jpeg', 'Halloween 2022', 0),
    ('images/emma.jpeg', 'My niece Emma', 0),
    ('images/captiva.jpeg', 'Bird on Captiva Island, Florida', 0),
    ('images/lumpy.jpeg', 'Lumpy live at The White Squirrel', 0);