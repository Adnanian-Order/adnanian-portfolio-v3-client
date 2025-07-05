npm run build
git add .
read -p "Enter commit message: " commit_message
git commit -m "$commit_message"
git push origin HEAD
git push origin HEAD:main