FORMAT: 1A

HOST: https://bossa-box.herokuapp.com/

# BossaBox Test API
This API is repositorie maneger tools


## Authentication [/auth]

### Return a token [POST]
+ Request (application/json)

    + Body

            {
                "email": "email@email.com",
                "password": "************"
            }

+ Response 200 (application/json)

    + Body

            {
                token : '1NiJ9.eyJpZCI6MX0.k5Uvc1eQeNMl1n4ib_Qpt21EKo-9vv1f-qK-8NjrjzY'
            }


## Tools [/tools]

### List all tools [GET]
+ Request (application/json)

    + Headers

            Authorization: 'Bearer 1NiJ9.eyJpZCI6MX0.k5Uvc1eQeNMl1n4ib_Qpt21EKo-9vv1f-qK-8NjrjzY'

+ Response 200 (application/json)

    + Body

            [    
                {
                    id: 1,
                    title: "Notion",
                    link: "https://notion.so",
                    description: "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
                    tags: [
                        "organization",
                        "planning",
                        "collaboration",
                        "writing",
                        "calendar"
                    ]
                },
                {
                    id: 2,
                    title: "json-server",
                    link: "https://github.com/typicode/json-server",
                    description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
                    tags: [
                        "api",
                        "json",
                        "schema",
                        "node",
                        "github",
                        "rest"
                    ]
                },
                {
                    id: 3,
                    title: "fastify",
                    link: "https://www.fastify.io/",
                    description: "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
                    tags: [
                        "web",
                        "framework",
                        "node",
                        "http2",
                        "https",
                        "localhost"
                    ]
                }
            ]

### Create a new tools [POST]

+ Request (application/json)

    + Headers

            Authorization: 'Bearer 1NiJ9.eyJpZCI6MX0.k5Uvc1eQeNMl1n4ib_Qpt21EKo-9vv1f-qK-8NjrjzY'

    + Body

            {
                "title": "hotel",
                "link": "https://github.com/typicode/hotel",
                "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
                "tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
            }

+ Response 200 (application/json)

    + Body

            {
                "title": "hotel",
                "link": "https://github.com/typicode/hotel",
                "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
                "tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"],
                "id":5
            }

## Tools [/tools/{id}]

### Delete a tools [DELETE]

+ Request (application/json)

    + Headers

            Authorization: 'Bearer 1NiJ9.eyJpZCI6MX0.k5Uvc1eQeNMl1n4ib_Qpt21EKo-9vv1f-qK-8NjrjzY'

+ Response 200 (application/json)

    + Body
    
            {}

## Tools filtered by tag [/tools{?tag}]

### List all tools filtered by tag [GET]
+ Request (application/json)

    + Headers

            Authorization: 'Bearer 1NiJ9.eyJpZCI6MX0.k5Uvc1eQeNMl1n4ib_Qpt21EKo-9vv1f-qK-8NjrjzY'

+ Response 200 (application/json)

        [
            {
                id: 2,
                title: "json-server",
                link: "https://github.com/typicode/json-server",
                description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
                tags: [
                    "api",
                    "json",
                    "schema",
                    "node",
                    "github",
                    "rest"
                ]
            },
            {
                id: 3,
                title: "fastify",
                link: "https://www.fastify.io/",
                description: "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
                tags: [
                    "web",
                    "framework",
                    "node",
                    "http2",
                    "https",
                    "localhost"
                ]
            }
        ]

## Users [/users]

### List all users [GET]
+ Request (application/json)

    + Headers

            Authorization: 'Bearer 1NiJ9.eyJpZCI6MX0.k5Uvc1eQeNMl1n4ib_Qpt21EKo-9vv1f-qK-8NjrjzY'

+ Response 200 (application/json)

    + Body

            [    
                {
                    "id": 1,
                    "name": "user",
                    "email": "email@email.com",
                    "password": "************"
                },
                {
                    "id": 2,
                    "name": "user",
                    "email": "email@email.com",
                    "password": "************"
                },
                {
                    "id": 3,
                    "name": "user",
                    "email": "email@email.com",
                    "password": "************"
                }
            ]

### Create a new user [POST]

+ Request (application/json)

    + Headers

            Authorization: 'Bearer 1NiJ9.eyJpZCI6MX0.k5Uvc1eQeNMl1n4ib_Qpt21EKo-9vv1f-qK-8NjrjzY'

    + Body

            {
                "name": "user",
                "email": "email@email.com",
                "password": "************"
            }

+ Response 200 (application/json)

    + Body

            {
                "id": 1,
                "name": "user",
                "email": "email@email.com",
                "password": "************"
            }


## Users [/users/{id}]

### List all user by id [GET]
+ Request (application/json)

    + Headers

            Authorization: 'Bearer 1NiJ9.eyJpZCI6MX0.k5Uvc1eQeNMl1n4ib_Qpt21EKo-9vv1f-qK-8NjrjzY'

+ Response 200 (application/json)

    + Body

            {
                "id": 1,
                "name": "user",
                "email": "email@email.com",
                "password": "************"
            }

### Delete user by id [DELETE]
+ Request (application/json)

    + Headers

            Authorization: 'Bearer 1NiJ9.eyJpZCI6MX0.k5Uvc1eQeNMl1n4ib_Qpt21EKo-9vv1f-qK-8NjrjzY'


+ Response 200 (application/json)

    + Body

            {}