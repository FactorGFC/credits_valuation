require 'mifiel'

# url = URI.parse(URI.encode('https://app-sandbox.mifiel.com/api/v1'))


# Mifiel.config do |config|
#   config.app_id = '1fd4ce198f29b75520d00522e1845c24bca340ab'
#   config.app_secret = 'kLhe79BRrBzqnS5mhGLZDCrcUXeafqqAg7h5XAXrN90yGGWHy5k7USDewyElAx3J78DfkY9hq/ndsWtxBI/2DA=='
#   config.base_url = 'https://app-sandbox.mifiel.com/api/v1' #remove this line when you wish to use the prod environment
# end



document = Mifiel::Document.find('c0ae7b08-dff1-462a-9b54-a5c43926939e')
p document.original_hash
p document.file
p document.file_signed
p document.widget_id



p "document -------------------------------------------------------------------------------------------------------------------------------------------"
p document