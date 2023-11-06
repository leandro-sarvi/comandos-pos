import { useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import megaLogo from  './assets/mega.png'
import './App.css'

function App() {
  const [open, setOpen] = useState(false)
  const [value, valuInput] = useState("")
  function copy(copy){
    setOpen(true);
navigator.clipboard.writeText(copy);
  }
  function getUpc(value){
    if(value ==""){
      alert("Campo vacio")
    }
    navigator.clipboard.writeText(`grep ${value} /home/server/inq/M_HSHPLU.DAT | cut -c 4-15`);
  }
  const handleChange = (event) => {
    // 👇 Get input value from "event"
    valuInput(event.target.value);
  };
const comandos = ["service emv stop\ncd /home/VTOLServices/emvkit/config/\nrm application.obj\nrm auditTransaction.obj\nrm auditVoucherTransaction.obj\nrm crypt.properties\nrm LAST_RSA.pem\nrm session.obj\nrm workingKeys.properties\nservice emv start\ncat /home/VTOLServices/emvkit/config/application.obj",
"/home/WMAR/check_POS.sh","lsusb","cat /etc/hosts","/home/reg/gd90/sh/./DECLARE_OK.SH",
"service epson_devicecontrollogserviced status\nservice epson_pcsvcd status\nservice epson_pcsvcd restart\nservice epson_devicecontrollogserviced restart\n",
"service Wildfly status\nservice Wildfly restart\nservice ArsPluMnt status\nservice ArsPluMnt restart\nservice POSServerRest status\nservice POSServerRest restart\nservice UserWatcher status\nservice UserWatcher restart",
"dmidecode -t system","service --status-all"]
  return (
    <>
      
      <div>
        <a href="https://sites.google.com/gdnargentina.com/mdamegatech/instructivos" target="_blank">
          <img src={megaLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Comandos Soporte POS</h1>
      <div className='grid'>
      <div className='divCard'>
        <p className='nameComando'>Estado linea de cajas</p>
      <div className="card">
        <input disabled className='textInput' value={comandos[1]}></input>
        <button onClick={() => copy(comandos[1])} title="copy">
          <ContentCopyIcon sx={{ color: "#c06500"}}/>
        </button>
        <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={open}
            onClose={() => setOpen(false)}
            autoHideDuration={1000}
            message="¡Comando copiado!"
          />
      </div>
      </div>
      <div className='divCard'>
<p className='nameComando'>Verificar dispositivos</p>
      <div className="card">
        <input disabled className='textInput' value={comandos[2]}></input>
        <button onClick={() => copy(comandos[2])} title="copy">
          <ContentCopyIcon sx={{ color: "#c06500"}}/>
        </button>
      </div>
      </div>
      <div className='divCard'>
<p className='nameComando'>Bloque comandos PinPad Error</p>
      <div className="card">
        <input disabled className='textInput' value="Bloque detener / borrar obj / iniciar"></input>
        <button onClick={() => copy(comandos[0])} title="copy">
          <ContentCopyIcon sx={{ color: "#c06500"}}/>
        </button>
      </div>
      </div>
      <div className='divCard'>
<p className='nameComando'>Verificar Host</p>
      <div className="card">
        <input disabled className='textInput' value={comandos[3]}></input>
        <button onClick={() => copy(comandos[3])} title="copy">
          <ContentCopyIcon sx={{ color: "#c06500"}}/>
        </button>
      </div>
      </div>
      <div className='divCard'>
<p className='nameComando'>Declarar OK AutoServicio o SSCO</p>
      <div className="card">
        <input disabled className='textInput' value={comandos[4]}></input>
        <button onClick={() => copy(comandos[4])} title="copy">
          <ContentCopyIcon sx={{ color: "#c06500"}}/>
        </button>
      </div>
      </div>
      <div className='divCard'>
<p className='nameComando'>Bloque restart servicios Epson </p>
      <div className="card">
        <input disabled className='textInput' value="Servicios epson: status / restart"></input>
        <button onClick={() => copy(comandos[5])} title="copy">
          <ContentCopyIcon sx={{ color: "#c06500"}}/>
        </button>
      </div>
      </div>
      <div className='divCard'>
<p className='nameComando'>Bloque servicios WebFront</p>
      <div className="card">
        <input disabled className='textInput' value="Servicios WebFront: status / restart"></input>
        <button onClick={() => copy(comandos[6])} title="copy">
          <ContentCopyIcon sx={{ color: "#c06500"}}/>
        </button>
      </div>
      </div>
      <div className='divCard'>
<p className='nameComando'>Verificar fabricante</p>
      <div className="card">
        <input disabled className='textInput' value={comandos[7]}></input>
        <button onClick={() => copy(comandos[7])} title="copy">
          <ContentCopyIcon sx={{ color: "#c06500"}}/>
        </button>
      </div>
      </div>
      <div className='divCard'>
<p className='nameComando'>Estado servicios ARS</p>
      <div className="card">
        <input disabled className='textInput' value={comandos[8]}></input>
        <button onClick={() => copy(comandos[8])} title="copy">
          <ContentCopyIcon sx={{ color: "#c06500"}}/>
        </button>
      </div>
      </div>
      <div className='divCard'>
<p className='nameComando'>Obtener UPC:</p>
      <div className="card">
        <input  className='textInput' placeholder='grep NUMERO_SKU /home/server/inq/M_HSHPLU.DAT | cut -c 4-15' onChange={handleChange}></input>
        <button onClick={() => getUpc(value)} title="copy">
          <ContentCopyIcon sx={{ color: "#c06500"}}/>
        </button>
      </div>
      </div>



      </div>
      <p className="read-the-docs">
        Click en "megatech" para redirigirse a los instructivos
      </p>
    </>
  )
}
export default App
