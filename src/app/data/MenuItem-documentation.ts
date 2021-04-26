import { MenuItem } from 'primeng/api';

export const MenuItemDocumentation: MenuItem[] = [
  {
    label: "Wczytaj pliki",
    icon: "pi pi-plus",
    routerLink: ["project-doc/add-files"]
  },
  {
    label: "Dokumentacja",
    icon: "pi pi-briefcase",
    routerLink: ["project-doc/documentation"]
  }
]
