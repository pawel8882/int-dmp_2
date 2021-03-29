import { MenuItem} from 'primeng/api';

export const MenuItemProjectWork: MenuItem[] = [
  {
    label: "Udestąpnione wiadomości",
    icon: "pi pi-inbox",
    routerLink: ["project-work/messages"]
  },
  {
    label: "Informacje",
    icon: "pi pi-comments",
    routerLink: ["project-work/shortmg"]
  },
  {
    label: "Zadania",
    icon: "pi pi-bars",
    routerLink: ["project-work/tasks"]
  },
  {
    label: "Terminy/Harmonogram",
    icon: "pi pi-clock",
    routerLink: ["project-work/schedule"]
  }
]
