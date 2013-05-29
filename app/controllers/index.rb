get '/' do
  @roles = dice_roles.roles
  cookies[:roles] = @roles
  p cookies
  erb :index
end

post '/roll' do
  dice_roles.roll!
  redirect to "/?roles=#{CGI.escape dice_roles.roles.to_json}"
end

get '/roles' do
  content_type :json
  dice_roles.roles.to_json
end
