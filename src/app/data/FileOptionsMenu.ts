import { MenuItem } from 'primeng/api';

export const FileOptionsMenu: MenuItem[] = [
  {
    label: "Pobierz",
    icon: "pi pi-cloud-download"
  },
  {
    label: "Szczegóły",
    icon: "pi pi-question"
  },
  {
    label: "Odznacz wszystko",
    icon: "pi pi-times",
    command: (event) => this.unselectFile()
  }
]
