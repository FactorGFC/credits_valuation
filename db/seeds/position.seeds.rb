
p '==> creating Blog Types'
# Disable auditing
#BlogType.auditing_enabled = false

# Delete all roles
BlogType.delete_all

ActiveRecord::Base.connection.reset_pk_sequence!('blog_types')

BlogType.create!([
                   {name: 'HEADER'},
                   {name: 'BLOG'},
                 ])

p '==> creating Positions'
# Disable auditing
#Position.auditing_enabled = false

# Delete all roles
Position.delete_all

ActiveRecord::Base.connection.reset_pk_sequence!('positions')

Position.create!([
                  {name: 'HEADER', blog_type_id: 1, order: 1},
                  {name: 'BLOG 1', blog_type_id: 2, order: 2},
                  {name: 'BLOG 2', blog_type_id: 2, order: 3},
                  {name: 'BLOG 3', blog_type_id: 2, order: 4},
                  {name: 'BLOG 4', blog_type_id: 2, order: 5}
                 ])
