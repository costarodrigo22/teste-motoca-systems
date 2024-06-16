import { Moto } from "../types/mock"

export const mockData: Moto[] = [
  {
    codigo: 1,
    modelo: "CBR 1000RR",
    cor: "Vermelha",
    valor: 45000,
    status: "Em estoque",
  },
  {
    codigo: 2,
    modelo: "Hornet",
    cor: "Verde",
    valor: 42000,
    status: "Sem estoque",
  },
  {
    codigo: 3,
    modelo: "BIZ",
    cor: "Azul",
    valor: 11000,
    status: "Em transito",
  },
  {
    codigo: 4,
    modelo: "MT 03",
    cor: "Azul",
    valor: 23000,
    status: "Em transito",
  },
  {
    codigo: 5,
    modelo: "MT 07",
    cor: "Azul",
    valor: 59000,
    status: "Sem estoque",
  },
]

export const addMockData = (newData: Moto) => {
  mockData.push(newData)
}
