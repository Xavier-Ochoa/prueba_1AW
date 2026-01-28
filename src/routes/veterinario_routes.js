import {Router} from 'express'
import { comprobarTokenPasword, confirmarMail, crearNuevoPassword, recuperarPassword, registro, login, getUnsplashImage, fetchQuoteController, perfil, actualizarPerfil, actualizarPassword} from '../controllers/veterinario_controller.js'
import { verificarTokenJWT } from '../middlewares/JWT.js'
const router = Router()


router.post('/registro',registro)
router.get('/confirm/:token',confirmarMail)

router.post('/recuperarpassword',recuperarPassword)
router.get('/recuperarpassword/:token',comprobarTokenPasword)
router.post('/nuevopassword/:token',crearNuevoPassword)
router.post('/login',login) 
router.get("/random-image", getUnsplashImage);
router.get("/frases", fetchQuoteController);
router.get('/perfil',verificarTokenJWT,perfil)
router.put('/actualizarperfil/:id',verificarTokenJWT,actualizarPerfil)
router.put('/actualizarpassword/:id',verificarTokenJWT,actualizarPassword)


export default router




