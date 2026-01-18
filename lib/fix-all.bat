@echo off
echo Fixing all Next.js errors...

REM 1. Fix folder case
if exist "app\Products" ren "app\Products" "app\products"

REM 2. Install dependencies
call npm install lucide-react @types/uuid

REM 3. Create missing lib files
if not exist "lib" mkdir lib

if not exist "lib\cart-context.tsx" (
    echo Creating cart-context.tsx...
    echo // Cart context code > "lib\cart-context.tsx"
)

if not exist "lib\mpesa-simulator.ts" (
    echo Creating mpesa-simulator.ts...
    echo // M-Pesa simulator code > "lib\mpesa-simulator.ts"
)

if not exist "lib\products.ts" (
    echo Creating products.ts...
    echo // Products data code > "lib\products.ts"
)

REM 4. Clear cache
rmdir /s /q .next 2>nul

echo.
echo Now run:
echo 1. npm run dev
echo 2. If dev works, run: npm run build
pause
