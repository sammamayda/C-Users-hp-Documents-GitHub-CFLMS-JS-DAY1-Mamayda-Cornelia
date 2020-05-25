var amount_banknotes = [1, 10, 100, 300];
var list_banknotes_needed = [0, 0, 0, 0];
var banknotes = [100, 50, 20, 10];
var account_balance = 2000;
var answer = 'yes';

function informBank(banknote_type) {
  console.log('need more money (%s bills)' % banknote_type)
    }



var withdraw_sum =  Number(prompt('How much money do you want to withdraw? '));
var informed_missing_banknotes = [];
while (answer == 'yes'){
    if (withdraw_sum <= account_balance){
        var index_value = 0;

        while (withdraw_sum > 0){
            var chosen_banknote = banknotes[index_value];

            if (index_value > length(banknotes)) {
                print('not enough bills');
                break
            }

            else{
                var banknotes_needed = Math.floor(withdraw_sum / chosen_banknote);
                if (banknotes_needed > 0){

                    banknotes_found = False
                    while ( banknotes_found == False){
                        if amount_banknotes[index_value] >= banknotes_needed:
                            amount_withdrawn = chosen_banknote * banknotes_needed

                            withdraw_sum -= amount_withdrawn

                            list_banknotes_needed[index_value] += banknotes_needed
                            amount_banknotes[index_value] -= banknotes_needed
                            index_value += 1
                            banknotes_found = True

                        else:
                            banknotes_needed -= 1
                            if not index_value in informed_missing_banknotes:
                                informed_missing_banknotes.append(index_value)
                                inform_bank(banknotes[index_value])
                            if banknotes_needed == 0:
                                index_value += 1
                                break
                    }
                }
                else{
                    index_value += 1
                }
            }
        }
    }
        index_banknotes = 0
        print(list_banknotes_needed)

        for i in banknotes:
            print(i * list_banknotes_needed[index_banknotes])
            index_banknotes += 1
        break
    else:
        print('Not enough money on your account')
        answer = input('Do you want to choose another sum? ("yes" "no")')
        if answer == 'yes':
            withdraw_sum = int(input('How much money do you want to withdraw? '))
        else:
            print('Thanks for using this ATM')
            break
}