AI-Powered Blog Platform
این پروژه یه پلتفرم بلاگ مبتنی بر NestJS با قابلیت تولید محتوای خودکار توسط AI (OpenAI) هست که برای نمایش مهارت‌های یک دولوپر mid-level طراحی شده. کاربران می‌تونن ثبت‌نام کنن، لاگین کنن، موضوعی برای پست بلاگ بدن و AI یه پست کامل (با عنوان، محتوا و تگ‌ها) تولید کنه. پست‌ها توی MongoDB ذخیره می‌شن و از Redis برای کشینگ استفاده می‌شه تا عملکرد بهینه بشه. این پروژه با معماری ماژولار، RESTful API، و احراز هویت JWT، تسلط به مفاهیم پیشرفته بک‌اند و کار با AI رو نشون می‌ده.
این پروژه به‌عنوان نمونه کار برای رزومه طراحی شده و با نیازهای آگهی‌های شغلی برای دولوپرهای NestJS با تجربه در Node.js، MongoDB، AI integration و معماری کلاینت-سرور همخوانی داره.
تکنولوژی‌های استفاده‌شده

NestJS: فریم‌ورک اصلی برای ساخت API ماژولار و مقیاس‌پذیر.
MongoDB & Mongoose: برای ذخیره‌سازی پست‌ها و کاربران با روابط one-to-many.
Redis: برای کشینگ لیست پست‌ها و جزئیات پست‌ها جهت بهبود عملکرد.
OpenAI API: برای تولید محتوای بلاگ (عنوان، متن، تگ‌ها) بر اساس موضوع کاربر.
JWT Authentication: برای احراز هویت کاربران با توکن‌های امن.
Swagger: برای مستندسازی API (در /api).
TypeScript: برای تایپینگ قوی و کاهش خطاهای runtime.
Class-validator & DTOs: برای ولیدیشن ورودی‌ها و خروجی‌های استاندارد.
Jest: برای تست‌های unit و e2e.

ویژگی‌های پروژه

معماری ماژولار: ماژول‌های جدا برای auth، users، و posts با استفاده از dependency injection.
RESTful API: اندپوینت‌های CRUD با پشتیبانی از pagination و filtering.
AI Integration: تولید محتوای بلاگ با OpenAI (پست‌های 300-500 کلمه‌ای با عنوان و تگ‌ها).
Caching: استفاده از Redis برای کشینگ لیست پست‌ها و جزئیات پست (TTL: 1 ساعت).
Authentication: ثبت‌نام و لاگین با JWT و guards برای حفاظت از روت‌ها.
Validation: استفاده از DTOها و ValidationPipe برای ورودی‌ها و خروجی‌ها.
Error Handling: مدیریت خطاها با HttpException و logging ساده.
API Documentation: مستندات Swagger در /api.

پیش‌نیازها

Node.js: نسخه 18 یا بالاتر.
MongoDB: لوکال یا ابری (مثل MongoDB Atlas).
Redis: لوکال یا ابری.
OpenAI API Key: از openai.com بگیر.
JWT Secret: یه کلید رندوم برای امضای توکن‌ها.

نصب و راه‌اندازی

کلون کردن پروژه:
git clone <repository-url>
cd ai-blog-api


نصب پکیج‌ها:
npm install


ایجاد فایل .env:فایل .env رو توی ریشه پروژه بساز و این تنظیمات رو وارد کن:
PORT=3000
MONGO_URI=mongodb://localhost:27017/ai-blog-db
REDIS_HOST=localhost
REDIS_PORT=6379
OPENAI_API_KEY=your_openai_api_key_here
JWT_SECRET=your_jwt_secret_here


اجرای پروژه:

حالت توسعه:npm run start:dev


حالت پروداکشن:npm run build
npm run start:prod




مشاهده مستندات API:بعد از اجرا، به http://localhost:3000/api برو تا مستندات Swagger رو ببینی.

تست API:

با Postman یا curl:
ثبت‌نام: POST /auth/register با بدنه { "username": "testuser", "password": "password123" }
لاگین: POST /auth/login با بدنه { "username": "testuser", "password": "password123" } (توکن JWT می‌گیره)
تولید پست: POST /posts/generate با هدر Authorization: Bearer <token> و بدنه { "topic": "فواید برنامه‌نویسی" }
لیست پست‌ها: GET /posts?page=1&limit=10
جزئیات پست: GET /posts/:id





ساختار پروژه
ai-blog-api/
├── src/
│   ├── auth/
│   │   ├── auth.controller.ts        # مدیریت ثبت‌نام و لاگین
│   │   ├── auth.service.ts           # منطق احراز هویت
│   │   ├── guards/                   # گاردها برای JWT و Local
│   │   ├── strategies/               # استراتژی‌های Passport
│   ├── posts/
│   │   ├── posts.controller.ts       # اندپوینت‌های پست (ایجاد، لیست، جزئیات)
│   │   ├── posts.service.ts          # منطق تولید پست با AI و کشینگ
│   │   ├── dto/                      # DTOها برای ولیدیشن و خروجی‌ها
│   │   ├── interfaces/               # تایپ‌های Mongoose
│   │   ├── schemas/                  # اسکیمای MongoDB
│   ├── users/
│   │   ├── users.service.ts          # مدیریت کاربران
│   │   ├── dto/                      # DTOها برای کاربر
│   │   ├── interfaces/               # تایپ‌های کاربر
│   │   ├── schemas/                  # اسکیمای کاربر
│   ├── app.module.ts                 # ماژول اصلی
│   ├── main.ts                       # نقطه ورود اپلیکیشن
├── test/
│   ├── app.e2e-spec.ts               # تست‌های e2e
│   ├── posts.service.spec.ts         # تست‌های unit
├── .env                              # تنظیمات محیطی
├── package.json                      # وابستگی‌ها و اسکریپت‌ها
├── tsconfig.json                     # تنظیمات TypeScript

تست‌ها

Unit Tests: برای سرویس‌ها (مثل posts.service.spec.ts).
E2E Tests: برای تست اندپوینت‌ها (مثل app.e2e-spec.ts).اجرا:

npm run test
npm run test:e2e

ارتباط با آگهی شغلی
این پروژه نیازهای آگهی زیر رو برآورده می‌کنه:

تسلط به NestJS و معماری ماژولار: پروژه از ماژول‌های جدا، dependency injection، و best practices مثل DTOها و pipes استفاده می‌کنه.
تسلط به AI: ادغام با OpenAI برای تولید محتوای بلاگ، با مدیریت خطاها و parsing پاسخ‌ها.
تسلط به MongoDB و Mongoose: استفاده از روابط (user-post)، indexing، و validation.
درک RESTful API و معماری کلاینت-سرور: اندپوینت‌های استاندارد با pagination، auth، و مستندات Swagger.
اضافه: استفاده از Redis برای کشینگ، JWT برای امنیت، و تست‌ها برای کیفیت کد.

بهبودهای ممکن

اضافه کردن قابلیت ویرایش/حذف پست.
استفاده از Winston برای logging پیشرفته.
پیاده‌سازی rate limiting برای جلوگیری از سوءاستفاده.
اضافه کردن Docker برای استقرار ساده‌تر.

تماس
برای سوالات یا پیشنهادات، به [ایمیل یا پروفایل GitHub خودت] پیام بدید.