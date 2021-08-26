import { Account, CurrencyType } from "../features/accounts/types";

export const getUser = (): Promise<any> => {
    return Promise.resolve({
        name: 'Roman',
        id: 1,
        accounts: [
            {
                currency: 'USD',
                currencySign: '$',
                amount: 1055.44,
            },
            {
                currency: 'EUR',
                currencySign: '€',
                amount: 20,
            },
            {
                currency: 'GBP',
                currencySign: '£',
                amount: 100,
            }
        ] as unknown as Account[]
    }).then(res => {
        const accounts = res.accounts.reduce((acc: Record<CurrencyType, Account>, cur: Account) => {
            acc[cur.currency] = cur

            return acc
        }, {} as Record<CurrencyType, Account>)

        return {
            user: {
                name: res.name,
                id: res.id
            },
            accounts,
            active: res.accounts?.[0]?.currency
        }
    })
}
