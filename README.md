# BITWALA CODING TASK
APIs for fetching block list and details of each block and it's transactions list

# ENDPOINTS

https://blocklist-api-vinay.herokuapp.com/blocksList?page=1
To fetch the blocks list with pagination. 10 blocks per page. 

https://blocklist-api-vinay.herokuapp.com/blockData?hash=0000000000000000001088de93437040aabd17df2b9ee3835dfe784f81f67e01
TO fetch details of an induvidual block. Needs hash value as a parameter

https://blocklist-api-vinay.herokuapp.com/blockTransactions?hash=0000000000000000001088de93437040aabd17df2b9ee3835dfe784f81f67e01&page=5
To fetch the list of transactions done for each block with pagination support. 10 transacitons data per page.
