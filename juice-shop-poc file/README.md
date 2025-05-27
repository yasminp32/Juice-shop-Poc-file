
# Juice Shop PoC - User Activity Logging (With File Output)

## Setup Instructions

1. Clone Juice Shop:
   git clone https://github.com/juice-shop/juice-shop.git
   cd juice-shop

2. Replace the middleware section of `app.js` with the content from `app.js-snippet.js`.

3. Make sure to import required modules (`fs`, `path`, `jwt`).

4. Install dependencies and start the app:
   npm install
   npm start

5. Login using test credentials:
   - Email: admin@juice-sh.op
   - Password: admin123

6. Perform actions and view the generated `user-activity.log` file in the root folder.

## Output Example

```
{"userId":1,"email":"admin@juice-sh.op","route":"/rest/basket/1","method":"GET","timestamp":"2025-05-27T12:00:00.000Z"}
```
