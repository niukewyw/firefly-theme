Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Building Firefox/Zen Extension v1.0.3" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Backup manifest.json
if (Test-Path "manifest.json") {
    Write-Host "[1/4] Backing up manifest.json..." -ForegroundColor Yellow
    Copy-Item "manifest.json" "manifest.json.backup" -Force
    Write-Host "    ✓ Backup created" -ForegroundColor Green
} else {
    Write-Host "[1/4] No manifest.json found, skipping backup" -ForegroundColor Yellow
}

Write-Host ""

# Step 2: Copy manifest_v2.json to manifest.json
Write-Host "[2/4] Using Manifest V2..." -ForegroundColor Yellow
Copy-Item "manifest_v2.json" "manifest.json" -Force
Write-Host "    ✓ manifest_v2.json copied to manifest.json" -ForegroundColor Green

Write-Host ""

# Step 3: Build with web-ext
Write-Host "[3/4] Building with web-ext..." -ForegroundColor Yellow
$buildResult = & web-ext build --overwrite-dest --filename=firefly-theme-1.0.3.xpi 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "❌ Build failed!" -ForegroundColor Red
    Restore-Manifest
    exit 1
}

Write-Host ""

# Step 4: Restore original manifest.json
Write-Host "[4/4] Restoring original manifest.json..." -ForegroundColor Yellow
if (Test-Path "manifest.json.backup") {
    Copy-Item "manifest.json.backup" "manifest.json" -Force
    Remove-Item "manifest.json.backup" -Force
    Write-Host "    ✓ Original manifest.json restored" -ForegroundColor Green
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Build completed successfully!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "📦 Output: web-ext-artifacts\firefly-theme-1.0.3.xpi" -ForegroundColor Cyan
Write-Host ""
Write-Host "Now you can install it in Zen browser:" -ForegroundColor White
Write-Host "  1. Open about:debugging#/runtime/this-firefox" -ForegroundColor White
Write-Host "  2. Click 'Load Temporary Add-on'" -ForegroundColor White
Write-Host "  3. Select web-ext-artifacts\firefly-theme-1.0.3.xpi" -ForegroundColor White
Write-Host ""

function Restore-Manifest {
    if (Test-Path "manifest.json.backup") {
        Write-Host ""
        Write-Host "[4/4] Restoring original manifest.json..." -ForegroundColor Yellow
        Copy-Item "manifest.json.backup" "manifest.json" -Force
        Remove-Item "manifest.json.backup" -Force
        Write-Host "    ✓ Original manifest.json restored" -ForegroundColor Green
    }
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "  Build failed, but manifest restored" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
}