import Link from 'next/link'
import './footer.css'

export default function Footer(){
    return(
        
        <footer>
            <div className='footer-top'>

                    <div> 
                        <img src="https://media.discordapp.net/attachments/1079701800145391756/1124573663807688744/Logo_blancFichier_5.png?width=766&height=418" alt="" />
                        <p>Mecadom+ est une marketplace de mécanacien pour les services de maintenance à domicile </p>
                    </div>
                        
                    <div>
                        <h3>Liens utiles</h3>
                        <ul>
                            <li><Link href='#'>Acceuil</Link></li>
                            <li><Link href='#'>A propos</Link></li>
                            <li><Link href='#'>Services</Link></li>
                            <li><Link href='#'>FAQ</Link></li>
                            <li><Link href='#'>Confidentialité</Link></li>
                        </ul>                            
                    </div>
                    

                    <div>
                        <h3>Services</h3>
                        <ul>
                            <li><Link href='#'>Services 1</Link></li>
                            <li><Link href='#'>Services 2</Link></li>
                            <li><Link href='#'>Services 3</Link></li>
                        </ul> 
                    </div>

                    <div>
                        <h3>Réseaux sociaux</h3>
                        <p>Suivez nos actualités</p>
                        <ul>
                            <li><Link href='#'>facebook</Link></li>
                            <li><Link href='#'>Instagram</Link></li>
                            <li><Link href='#'>TikTok</Link></li>
                        </ul> 
                    </div>
            </div>
            
                <div className='footer-bottom'>
                    <div class="copyright">
                    © Copyright <strong><span>Mecadom</span></strong>.Tous droits Réservé
                    </div>
                    <div class="design-by">
                        Conçu par <strong><a href="https://stack-it-web.vercel.app/">Stack IT </a></strong>
                    </div>
                </div>
        </footer>
    )
}