//Напиши скрипт управления личным кабинетом интернет банка. 
//Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
//Типов транзацкий всего два.
// - Можно положить либо снять деньги со счета.
// - Каждая транзакция это объект со свойствами: id, type и amount

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
    balance: 0,                                                    // Текущий баланс счета
    
    transactions: [],                                              // История транзакций
    
    createTransaction(amount, type) {                              // Метод создает и возвращает объект транзакции. Принимает сумму и тип транзакции.
        let transactionNew = {
            id: this.transactions.length,
            amount: amount,
            type: type  
        }
        return this.transactions.push(transactionNew)
    },    

    deposit(amount) {                                               // Метод отвечающий за добавление суммы к балансу. Принимает сумму танзакции. 
        this.balance += amount;                                     // Вызывает createTransaction для создания объекта транзакции после чего добавляет его в историю транзакций.
        this.createTransaction(amount, Transaction.DEPOSIT)
    },

    withdraw(amount) {                                              // Метод отвечающий за снятие суммы с баланса. Принимает сумму танзакции.
        if (amount > this.balance) {                                // Вызывает createTransaction для создания объекта транзакции после чего добавляет его в историю транзакций.
            console.log('Not enough currency');                     // Если amount больше чем текущий баланс, выводи сообщение, что снятие такой суммы не возможно, 
        }                                                           // недостаточно средств.
        else {
            this.balance -= amount;
            this.createTransaction(amount, Transaction.WITHDRAW)
        }
    },

    getBalance() {                                                  // Метод возвращает текущий баланс
        console.log(this.balance); 
    },

    getTransactionDetails(id){                                      // Метод ищет и возвращает объект транзации по id
        for(let elem of this.transactions){
            if (elem.id === id){
                console.log(elem);
            }
        }
    },

    getTransactionTotal(type) {                                     // Метод возвращает количество средств определенного типа транзакции из всей истории транзакций.
        let totalTransaction = 0;
            for (let elem of this.transactions){
                if (elem.type === type){
                    totalTransaction += elem.amount
                }
            }
        console.log(`Total ${type} transition = ${totalTransaction}`);
    },
};

account.deposit(1000);
console.log(account.transactions);
account.getBalance();


account.withdraw(500);
console.log(account.transactions);
account.getBalance();

account.deposit(2500);
console.log(account.transactions);
account.getBalance();

account.getTransactionDetails(2);

account.withdraw(3500);
console.log(account.transactions);
account.getBalance();

account.getTransactionTotal('deposit');