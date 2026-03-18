#!/bin/bash

# Bangalore Ride Planner - GitHub Upload Script
# This script will help you push your project to GitHub

echo "🏍️ Bangalore Ride Planner - GitHub Upload"
echo "=========================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    echo "Visit: https://git-scm.com/downloads"
    exit 1
fi

echo "✅ Git is installed"
echo ""

# Navigate to frontend directory
cd /app/frontend

# Initialize git if not already done
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git initialized"
else
    echo "✅ Git already initialized"
fi

# Add all files
echo ""
echo "📝 Adding files to git..."
git add .

# Check if there are changes to commit
if git diff-index --quiet HEAD 2>/dev/null; then
    echo "⚠️  No changes to commit"
else
    echo "💾 Creating commit..."
    git commit -m "Initial commit: Bangalore Ride Planner - 50+ routes with Google Maps integration"
    echo "✅ Commit created"
fi

echo ""
echo "=========================================="
echo "🎯 Next Steps:"
echo "=========================================="
echo ""
echo "1. Create a new repository on GitHub:"
echo "   - Go to: https://github.com/new"
echo "   - Repository name: bangalore-ride-planner"
echo "   - Description: 50+ curated Bangalore bike routes with Google Maps"
echo "   - Keep it Public (or Private)"
echo "   - DO NOT initialize with README, .gitignore, or license"
echo "   - Click 'Create repository'"
echo ""
echo "2. Copy your repository URL (will look like):"
echo "   https://github.com/YOUR-USERNAME/bangalore-ride-planner.git"
echo ""
echo "3. Run these commands (replace YOUR-USERNAME):"
echo ""
echo "   cd /app/frontend"
echo "   git remote add origin https://github.com/YOUR-USERNAME/bangalore-ride-planner.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "4. Enter your GitHub credentials when prompted"
echo ""
echo "5. Your repository will be live at:"
echo "   https://github.com/YOUR-USERNAME/bangalore-ride-planner"
echo ""
echo "=========================================="
echo "✅ Git repository is ready!"
echo "=========================================="
