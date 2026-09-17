def ler_nota(nome):
    while True:
        try:
            nota = float(input(f"Digite a nota da {nome} (0 a 10): ").replace(",", "."))
        except ValueError:
            print("Valor invalido. Digite um numero.")
            continue

        if 0 <= nota <= 10:
            return nota

        print("A nota deve estar entre 0 e 10.")


def calcular_media(np1, np2, pim):
    peso_np1 = 4
    peso_np2 = 4
    peso_pim = 2
    soma_pesos = peso_np1 + peso_np2 + peso_pim

    return ((np1 * peso_np1) + (np2 * peso_np2) + (pim * peso_pim)) / soma_pesos


def main():
    print("Calculo de media ponderada")
    print("NP1 = 40% | NP2 = 40% | PIM = 20%")
    print()

    np1 = ler_nota("NP1")
    np2 = ler_nota("NP2")
    pim = ler_nota("PIM")

    media = calcular_media(np1, np2, pim)

    print()
    print(f"Media final: {media:.2f}")


if __name__ == "__main__":
    main()
