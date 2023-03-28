import { Separator } from '@/components/ui/Separator';
import {
    BarChart3Icon,
    BinaryIcon,
    BoxIcon,
    CalendarCheckIcon,
    CalendarDaysIcon,
    CalendarIcon,
    CalendarSearchIcon,
    ClipboardCheckIcon,
    ClipboardIcon,
    ClipboardListIcon,
    FilePlus2Icon,
    FileSpreadsheetIcon,
    LogOutIcon,
    MailQuestionIcon,
    MessageCircleIcon,
    MessageSquareIcon,
    PalmtreeIcon,
    PlusCircleIcon,
    SaveIcon,
    SearchIcon, SettingsIcon,
    SheetIcon,
    ShoppingCartIcon,
    UserIcon
} from 'lucide-react';
import {
    Menu,
    MenuItem,
    Sidebar as RPSidebar,
    SubMenu
} from 'react-pro-sidebar';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar"
import { Button } from '@/components/ui/Button';


const Sidebar = () => {
    return (
        <div className='flex flex-col justify-between h-full bg-white'>
            <RPSidebar width='256px' className='bg-white h-full max-h-[calc(100%-70px)]'>
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-50 px-3 py-4">
                    Tableau de bord
                </div>
                <Separator />
                <Menu className=''>
                    <SubMenu label="Surveillance" icon={<CalendarDaysIcon size={20} strokeWidth={2.4} />} className="text-slate-700 text-sm font-semibold rounded-full">
                        <MenuItem icon={<CalendarIcon size={20} strokeWidth={2.4} />}> Calendrier </MenuItem>
                        <MenuItem icon={<CalendarCheckIcon size={20} strokeWidth={2.4} />}> Créer Calendrier </MenuItem>
                        <MenuItem icon={<SaveIcon size={20} strokeWidth={2.4} />}> Calendrier sauvegardées </MenuItem>
                        <MenuItem icon={<MessageCircleIcon size={20} strokeWidth={2.4} />}> Réclamations </MenuItem>
                    </SubMenu>
                    <Separator />
                </Menu>
                <Menu>
                    <SubMenu label="Notes" icon={<BinaryIcon size={20} strokeWidth={2.4} />} className="text-slate-700 text-sm font-semibold rounded-full">
                        <MenuItem icon={<CalendarCheckIcon size={20} strokeWidth={2.4} />}> Semestre 1 </MenuItem>
                        <MenuItem icon={<CalendarCheckIcon size={20} strokeWidth={2.4} />}> Semestre 2 </MenuItem>
                        <MenuItem icon={<SettingsIcon size={20} strokeWidth={2.4} />}> Réclamation </MenuItem>
                        <MenuItem icon={<MessageSquareIcon size={20} strokeWidth={2.4} />}> Section </MenuItem>
                    </SubMenu>
                    <Separator />
                    <SubMenu label="Magasin" icon={<ShoppingCartIcon size={20} strokeWidth={2.4} />} className="text-slate-700 text-sm font-semibold rounded-full">
                        <MenuItem icon={<CalendarSearchIcon size={20} strokeWidth={2.4} />}> Consulter demandes </MenuItem>
                        <MenuItem icon={<ClipboardCheckIcon size={20} strokeWidth={2.4} />}> Ajouter produit (service) </MenuItem>
                        <MenuItem icon={<PlusCircleIcon size={20} strokeWidth={2.4} />}> Demande produit </MenuItem>
                        <MenuItem icon={<SearchIcon size={20} strokeWidth={2.4} />}> Consulter produit </MenuItem>
                        <MenuItem icon={<ClipboardListIcon size={20} strokeWidth={2.4} />}> Factures </MenuItem>
                        <MenuItem icon={<BoxIcon size={20} strokeWidth={2.4} />}> Produits </MenuItem>
                        <MenuItem icon={<SearchIcon size={20} strokeWidth={2.4} />}> Fournisseurs </MenuItem>
                    </SubMenu>
                    <Separator />
                    <SubMenu label="Charge" icon={<SheetIcon size={20} strokeWidth={2.4} />} className="text-slate-700 text-sm font-semibold rounded-full">
                        <MenuItem icon={<CalendarDaysIcon size={20} strokeWidth={2.4} />}> Gestion diplomes </MenuItem>
                        <MenuItem icon={<FileSpreadsheetIcon size={20} strokeWidth={2.4} />}> Consultation voeux </MenuItem>
                        <MenuItem icon={<SearchIcon size={20} strokeWidth={2.4} />}> Consultation enseignant </MenuItem>
                        <MenuItem icon={<UserIcon size={20} strokeWidth={2.4} />}> Profile information </MenuItem>
                        <MenuItem icon={<FilePlus2Icon size={20} strokeWidth={2.4} />}> Soumettre voeux </MenuItem>
                    </SubMenu>
                    <Separator />
                    <SubMenu label="Congé" icon={<PalmtreeIcon size={20} strokeWidth={2.4} />} className="text-slate-700 text-sm font-semibold rounded-full">
                        <MenuItem icon={<MailQuestionIcon size={20} strokeWidth={2.4} />}> Demande un congé </MenuItem>
                        <MenuItem icon={<ClipboardIcon size={20} strokeWidth={2.4} />}> Mes demandes </MenuItem>
                        <MenuItem icon={<ClipboardListIcon size={20} strokeWidth={2.4} />}> Les demandes </MenuItem>
                        <MenuItem icon={<BarChart3Icon size={20} strokeWidth={2.4} />}> Statistiques </MenuItem>
                    </SubMenu>
                </Menu>
            </RPSidebar>
            <div className='mt-auto w-64 border-r'>
                <Separator />
                <div className='flex justify-between p-3'>
                    <div className='flex items-center gap-3'>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className='flex flex-col'>
                            <div className="text-sm font-semibold text-slate-900">
                                Flen Fouleni
                            </div>
                            <p className='text-xs text-slate-400'>flen@fouleni.com</p>
                        </div>
                    </div>
                    <Button variant="ghost"><LogOutIcon className="h-5 w-5 text-slate-700" /></Button>
                </div>
            </div>
        </div>

    )
}

export default Sidebar