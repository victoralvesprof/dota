import { DataTable } from '../model/hero-table.model';

export const DATATABLE = [
  { title: 'Nome', dataKey: 'localized_name' },
  { title: 'Atributo', dataKey: 'primary_attr' },
  { title: 'Tipo de ataque', dataKey: 'attack_type' },
  { title: 'Categorias', dataKey: 'roles' },
] as Array<DataTable>;

export const DATATABLEKEY = [
  'localized_name',
  'primary_attr',
  'attack_type',
  'roles',
] as Array<string>;
