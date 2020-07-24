var usuarios = new Array()
            function cadastrarUsuario(){
                var clogin = document.getElementById('user').value
                var csenha = document.getElementById('senha').value
                var csenhaConfirmacao = document.getElementById('csenha').value
                
                if(csenha == csenhaConfirmacao){
                    //antes de cadastrar eu preciso fazer o carregamento dos dados salvos
                    usuarios = JSON.parse(localStorage.getItem('Usuarios'))
                    //se não existe nada cadastrado no localstorage, a variável será null, portanto eu devo recriar o array
                    if(usuarios == null)
                        usuarios = new Array()

                    //criando uma posição para o array
                    var user = {
                        login: clogin,
                        senha: csenha        
                    }
                    //adiciono a posição criada anterior, no array usuários    
                    usuarios.push(user)
                    //converto usuarios para json e envio para o localstorage
                    localStorage.setItem('Usuarios', JSON.stringify(usuarios))

                    alert('Usuário cadastrado com sucesso!')
                    window.open('index.html')
                }else{
                    alert('Senhas não conferem!')
                }
            }
            var usuarios = new Array()
            function autenticar(){
                var clogin = document.getElementById('user').value
                var csenha = document.getElementById('senha').value

                usuarios = JSON.parse(localStorage.getItem('Usuarios'))
                if(usuarios == null)
                    usuarios = new Array()
                
                var encontrou = false
                for(var i=0; i<usuarios.length; i++){
                    if(clogin == usuarios[i].login && csenha == usuarios[i].senha){
                        encontrou = true
                    }
                }
                //encontrou dentro do for, portanto o usuário pode entrar no sistema
                if(encontrou == true){
                    alert('Bem-vindo!')
                    window.open('home.html')
                }else{
                    alert('Login ou Senha não existem no sistema!')
                }
            }