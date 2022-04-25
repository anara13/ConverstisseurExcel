
        //la réponse de l'utilisateur détermine le contenu à afficher
        function verficationOrthographe(){

            //dans tous les cas, le bouton Soumettre du formualire devient accessible
            document.getElementById("formValidation").setAttribute("style", "display: block");
            const orthographe = document.querySelector('input[name="orthographe"]:checked').value;

            //si oui on affiche le formulaire complet sans le champ correction
            if(orthographe == "oui")
            {
                afficherForm();
            }
            //sinon on affiche uniquement le champ correction qui devient obligatoire
            else if(orthographe == "non")
            {
                //si on a déjà généré un "oui", alors on supprime la valeur par défaut de value
                if(document.getElementById("correction").children[0].getAttribute("value") == "")
                {
                    document.getElementById("correction").children[0].removeAttribute("value");
                }
                document.getElementById("formComplet").setAttribute("style", "display: none");
                document.getElementById("correction").children[0].setAttribute("required", "true");
                document.getElementById("correction").setAttribute("style", "display: block");
                
                
            }
        }

        //affiche les champs formulaire qui deviennent obligatoires
        function afficherForm() 
        {
            document.getElementById("correction").setAttribute("style", "display: none");

            //si on a déjà généré un "non", alors on supprime le caractère obligatoire du champ
            if (document.getElementById("correction").children[0].getAttribute("required") == "true")
            {    
                    document.getElementById("correction").children[0].removeAttribute("required");
            }
            document.getElementById("formComplet").setAttribute("style", "display: block");
            document.getElementById("correction").children[0].setAttribute("value", "");
        }