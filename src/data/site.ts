import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';

const homePath = path.join(process.cwd(), 'src/data/home.yml');
const home = parse(fs.readFileSync(homePath, 'utf8'));
const themePath = path.join(process.cwd(), 'src/data/theme.yml');
const theme = parse(fs.readFileSync(themePath, 'utf8'));

export const site = {
  title: 'Scott Cheng',
  email: 'scottcjx.w@gmail.com',
  github: 'https://github.com/scott-cjx',
  scholar: 'https://scholar.google.ca/citations?user=_t5KgzMAAAAJ',
  linkedin: 'https://www.linkedin.com/in/scottcjx/',
  theme,
  ...home
};
