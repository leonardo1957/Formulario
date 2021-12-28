function validaCampoVazio(idCampo) {
    var campo = $(idCampo);
    if (campo.val() == "") {
        campo.addClass("campo-erro");
    } else {
        campo.removeClass("campo-erro");
    }
}
$(function () {

    $("#form").submit(function () {
        validaCampoVazio("#nome");
        validaCampoVazio("#email");
        validaCampoVazio("#cpf");
        var validaRadio = false;
        $('#nacion input:radio').each(function () {
            if ($(this).is(':checked')) {

                validaRadio = true;
            }
        });

        if (validaRadio == false) {
            alert('Selecione Nacionalidade');
        }
        $('#nacionalidade').each(function () {
            if ($(this).is(':checked')) {
                if ($('#cadastro-estados').val() == "") {
                    alert("Selecione estado");
                }
            }
        });
        return false;
    });
    $(document).ready(function () {
        $('#sel').hide();
        $("#cadastro-estados").attr("disabled", true);
        $('#nacionalidade').click(function () {
            $("#cadastro-estados").removeAttr("disabled");
        });

        $('#nacionalidade2').click(function () {

            $("#cadastro-estados").attr("disabled", true);
        })
        $("input#todas").click(function () {
            var checked_status = this.checked;
            $("input#check").each(function () { this.checked = checked_status; });
        });

        $('#gost').click(function () {
            if (this.checked) {
                $('#sel').show('slow');
            } else {
                $('#sel').hide('slow');
            }
        });
    });
});