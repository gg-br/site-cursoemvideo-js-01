function carregar()

{
    var data = new Date()
    var hora = data.getHours()
   

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12)
    {
        msg.innerHTML = `Agora são ${hora} horas. Tenha um bom dia`
        
    }

    else
    {
        if (hora >= 12 && hora < 18)
        {
            msg.innerHTML = `Agora são ${hora} horas. Tenha uma boa tarde`
        }

        else
        {
            msg.innerHTML = `Agora são ${hora} horas. Boa noite`
        }
    }
}