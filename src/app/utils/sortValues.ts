import { Sort } from "src/app/models/sort.model";

export const SortValues: Sort[] = [
  {value: 'none', label: 'Отключить'},
  {value: 'alphabetAsc', label: 'По алфивиту ↓'},
  {value: 'alphabetDesc', label: 'По алфивиту ↑'},
  {value: 'importantAsc', label: 'По важности ↓'},
  {value: 'importantDesc', label: 'По важности ↑'},
]