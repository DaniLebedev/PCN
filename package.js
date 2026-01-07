const fs = require('fs');
const archiver = require('archiver');

const buildAndZip = async () => {
  // 1. Собираем проект
  const { execSync } = require('child_process');
  execSync('npm run build', { stdio: 'inherit' });

  // 2. Извлекаем файлы
  const sourceDir = './build';
  const distDir = './output';
  
  if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);
  
  // Копируем файлы с переименованием
  const files = {
    'index.html': 'index.html',
    [findFile(sourceDir, 'css', 'main.*.css')]: 'styles.css',
    [findFile(sourceDir, 'js', 'main.*.js')]: 'script.js'
  };
  
  // 3. Архивируем
  const output = fs.createWriteStream('./website.zip');
  const archive = archiver('zip');
  
  archive.pipe(output);
  Object.entries(files).forEach(([src, dest]) => {
    archive.file(path.join(sourceDir, src), { name: dest });
  });
  
  await archive.finalize();
  console.log('✅ Сайт упакован в website.zip (3 файла внутри)');
};

function findFile(dir, subdir, pattern) {
  const files = fs.readdirSync(path.join(dir, 'static', subdir));
  return `static/${subdir}/` + files.find(f => new RegExp(pattern).test(f));
}