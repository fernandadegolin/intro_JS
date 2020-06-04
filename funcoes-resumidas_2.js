////////////////////// 
//opção 1 de escrita 'inteira'

const alreadySelected = selectedItems.findIndex(
        function (item) {
            const itemFound = item == itemId
            return itemFound
        })


//////////////////////       
//opção 2 de escrita 'semi-reduzida'

const alreadySelected = selectedItems.findIndex(item => {
            const itemFound = item == itemId
            return itemFound
        })
        
        
//////////////////////
//opção 3 de escrita 'reduzida'
const alreadySelected = selectedItems.findIndex(item) => item == itemId)
