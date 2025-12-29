# RWUA Project Troubleshooting Guide

## Memory Issues (Out of Memory Errors)

### Problem
Getting "Fatal process out of memory" or similar Node.js memory errors.

### Solutions

#### Option 1: Use Memory-Optimized Scripts (Recommended)
```bash
# Development with 4GB memory allocation
scripts/dev.bat

# Build with 4GB memory allocation  
npm run build

# Lightweight development (2GB memory)
scripts/dev-light.bat
```

#### Option 2: Manual Memory Settings
```bash
# Set environment variable (Windows)
set NODE_OPTIONS=--max-old-space-size=4096

# Then run normal commands
npm run dev:safe
npm run build:safe
```

#### Option 3: System-Level Fixes
1. **Close other applications** to free up RAM
2. **Restart your computer** to clear memory
3. **Check available memory**: Run `scripts/check-memory.bat`

### Memory Requirements
- **Minimum**: 4GB RAM
- **Recommended**: 8GB+ RAM
- **Development**: Uses ~2-4GB during build
- **Production Build**: Uses ~1-2GB

## Build Issues

### TypeScript Errors
```bash
# Clear cache and rebuild
npm run clean
npm install
npm run build
```

### Dependency Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use
```bash
# Use different port
npm run dev -- -p 3001

# Or kill existing process
taskkill /F /IM node.exe
```

## Git/GitHub Issues

### Authentication Problems
```bash
# Configure Git credentials
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Use GitHub token for authentication
git remote set-url origin https://YOUR_TOKEN@github.com/username/repo.git
```

### Push Rejected
```bash
# Pull latest changes first
git pull origin main --rebase
git push origin main
```

## Performance Optimization

### Slow Development Server
1. Use `scripts/dev-light.bat` for lighter memory usage
2. Close unnecessary browser tabs
3. Disable browser extensions
4. Use `npm run dev:safe` instead of `npm run dev`

### Slow Builds
1. Clear `.next` folder: `rm -rf .next`
2. Use `npm run build:safe` for standard memory usage
3. Close other applications during build

## Quick Fixes

### Complete Reset
```bash
# Nuclear option - reset everything
scripts/reset.bat  # (if available)

# Or manually:
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Check System Status
```bash
# Check memory and processes
scripts/check-memory.bat

# Check Git status
git status

# Check Node.js version
node --version
npm --version
```

## Emergency Commands

If nothing works, try these in order:

1. **Restart development server**:
   ```bash
   Ctrl+C  # Stop current server
   scripts/dev-light.bat
   ```

2. **Clean rebuild**:
   ```bash
   rm -rf .next
   npm run build:safe
   ```

3. **Complete reset**:
   ```bash
   rm -rf node_modules .next package-lock.json
   npm install
   npm run build:safe
   ```

4. **System restart**: Restart your computer and try again

## Getting Help

1. **Check this guide first**
2. **Run memory check**: `scripts/check-memory.bat`
3. **Check Git status**: `git status`
4. **Create GitHub issue** with error details
5. **Include system info**: OS, RAM, Node.js version

---

**Remember**: Most issues are memory-related. Use the memory-optimized scripts first!