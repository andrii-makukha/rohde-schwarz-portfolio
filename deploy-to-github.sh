#!/bin/bash

# Скрипт для загрузки проекта на GitHub
# Использование: ./deploy-to-github.sh

echo "🚀 Подготовка к загрузке на GitHub..."
echo ""

# Проверка наличия remote
if git remote | grep -q origin; then
    echo "✅ Remote 'origin' уже настроен"
    git remote -v
else
    echo "⚠️  Remote 'origin' не настроен"
    echo ""
    echo "📝 Выполните следующие шаги:"
    echo ""
    echo "1. Создайте новый репозиторий на GitHub:"
    echo "   - Перейдите на https://github.com/new"
    echo "   - Название: rohde-schwarz-portfolio (или любое другое)"
    echo "   - НЕ создавайте README, .gitignore или license (они уже есть)"
    echo "   - Нажмите 'Create repository'"
    echo ""
    echo "2. После создания репозитория выполните команду:"
    echo "   git remote add origin https://github.com/andrii-makukha/rohde-schwarz-portfolio.git"
    echo "   (замените 'andrii-makukha' на ваш GitHub username)"
    echo ""
    echo "3. Затем выполните:"
    echo "   git branch -M main"
    echo "   git push -u origin main"
    echo ""
fi

echo ""
echo "📋 Текущий статус:"
git status

