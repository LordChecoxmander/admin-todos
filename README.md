teo 161

# Development
Pasos para leantar la app

1. Levantar la BD

```
docker compose up -d
```
2. Renombrar el .env.template a .env
3. Reemplazar las variables de entorno
4. Ejecutar el comando 
```
npm install
```
5. Ejecutar el comando 
```
npm run dev
```
4. Ejecutar el comando 
```
npx prisma migrate dev
npx prisma generate
```
7. Ejecutar el [seed](localhost:3000/api/seed)

## note 
user defect: test1@google.com
pass defect: 123456 

# Prisma Commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```

