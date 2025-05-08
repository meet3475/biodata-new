'use client';
import React, { useEffect, useState } from 'react';
import AddFieldModal from '../AddFieldModal/AddFieldModal';
import AddSectionModal from '../AddSectionModal/AddSectionModal';
import { PDFDownloadLink, Document, Page, View, Text, Image, StyleSheet, Font } from '@react-pdf/renderer';
import PDFPreview from '../PDFPreview/PDFPreview';
import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import Swal from 'sweetalert2';
import DataLoader from '../Loarder/DataLoader';
import { FaPlus } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import { FaFilePdf } from "react-icons/fa6";

// Create styles for PDF document

Font.register({
    family: 'NotoSans',
    fonts: [
        { src: '/fonts/NotoSans-Regular.ttf', fontWeight: 'normal' }
    ]
});

Font.register({
    family: 'NotoSansDevanagari',
    fonts: [
        { src: '/fonts/NotoSansDevanagari-Regular.ttf', fontWeight: 'normal' }
    ]
});

Font.register({
    family: 'NotoSansGujarati',
    fonts: [
        { src: '/fonts/NotoSansGujarati-Regular.ttf', fontWeight: 'normal' }
    ]
});

Font.register({
    family: 'NotoSansTamil',
    fonts: [
        { src: '/fonts/NotoSansTamil-Regular.ttf', fontWeight: 'normal' }
    ]
});

Font.register({
    family: 'NotoSansBengali',
    fonts: [
        { src: '/fonts/NotoSansBengali-Regular.ttf', fontWeight: 'normal' }
    ]
});

// Update the PDF styles in your BiodataForm.jsx file
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        fontFamily: 'NotoSans',
        padding: 0, // Remove padding to use full page
        margin: 0  // Remove margins
    },
    text: {
        fontFamily: 'NotoSans'
    },
    contentContainer: {
        marginHorizontal: 30,
        marginVertical: 20, // Reduced from 40
        flexGrow: 1, // This will make the content expand
        justifyContent: 'flex-start' // Align content to top
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 20 // Add top margin
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#1b7261',
        marginRight: 20,
        objectFit: 'fill'
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#051145'
    },
    subtitle: {
        fontSize: 14,
        color: '#666666'
    },
    section: {
        marginBottom: 15, // Increased margin between sections
        marginHorizontal: 20 // Add horizontal margins
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1b7261',
        borderBottomWidth: 2,
        borderBottomColor: '#1b7261',
        marginBottom: 15, // Increased space after section title
        paddingBottom: 5
    },
    fieldRow: {
        flexDirection: 'row',
        marginBottom: 3,
        width: '100%',
        minHeight: 14
    },
    fieldName: {
        width: '40%',
        fontSize: 11,
        fontWeight: 'bold',
        paddingRight: 10 // Add padding between field name and value
    },
    fieldValue: {
        width: '60%',
        fontSize: 11
    },
    templateBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'fill', // This ensures the image covers the entire area
        opacity: 0.8,
        zIndex: 0
    },
    templateImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 10,
        color: '#999999',
        fontFamily: 'NotoSans'
    }
});

const BiodataForm = ({ scrollToTemplates }) => {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: '',
        timeOfBirth: '',
        placeOfBirth: '',
        complexion: '',
        height: '',
        gotraCaste: '',
        occupation: '',
        income: '',
        education: '',
        fatherName: '',
        fatherOccupation: '',
        motherName: '',
        motherOccupation: '',
        siblings: '',
        contactPerson: '',
        contactNumber: '',
        residentialAddress: ''
    });

    // State for profile image
    const [profileImage, setProfileImage] = useState(null);

    // Validation state
    const [errors, setErrors] = useState({});

    // Section visibility state
    const [sections, setSections] = useState({
        personal: true,
        family: true,
        contact: true,
    });

    // Field order state (to manage reordering)
    const [fieldOrder, setFieldOrder] = useState({
        personal: ['name', 'dateOfBirth', 'timeOfBirth', 'placeOfBirth', 'complexion', 'height', 'gotraCaste', 'occupation', 'income', 'education'],
        family: ['fatherName', 'fatherOccupation', 'motherName', 'motherOccupation', 'siblings'],
        contact: ['contactPerson', 'contactNumber', 'residentialAddress']
    });

    // Field labels mapping
    const [fieldLabels, setFieldLabels] = useState({
        name: 'Name',
        dateOfBirth: 'Date of Birth',
        timeOfBirth: 'Time of Birth',
        placeOfBirth: 'Place of Birth',
        complexion: 'Complexion',
        height: 'Height',
        gotraCaste: 'Gotra/Caste',
        occupation: 'Occupation',
        income: 'Income',
        education: 'Education',
        fatherName: 'Father\'s Name',
        fatherOccupation: 'Father\'s Occupation',
        motherName: 'Mother\'s Name',
        motherOccupation: 'Mother\'s Occupation',
        siblings: 'Brother / Sister',
        contactPerson: 'Contact Person Name',
        contactNumber: 'Contact Number',
        residentialAddress: 'Residential Address'
    });

    // Modal states
    const [showAddFieldModal, setShowAddFieldModal] = useState(false);
    const [showAddSectionModal, setShowAddSectionModal] = useState(false);
    const [currentSection, setCurrentSection] = useState('');
    const [newFieldName, setNewFieldName] = useState('');
    const [newFieldLabel, setNewFieldLabel] = useState('');
    const [newSectionName, setNewSectionName] = useState('');
    const [sectionFields, setSectionFields] = useState([]);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const [loading, setLoading] = useState(false);

    // Add to your existing state
    const [currentLanguage, setCurrentLanguage] = useState('English');
    const [translations, setTranslations] = useState({
        English: {
            name: 'Name',
            dateOfBirth: 'Date of Birth',
            timeOfBirth: 'Time of Birth',
            placeOfBirth: 'Place of Birth',
            complexion: 'Complexion',
            height: 'Height',
            gotraCaste: 'Gotra/Caste',
            occupation: 'Occupation',
            income: 'Income',
            education: 'Education',
            fatherName: 'Father\'s Name',
            fatherOccupation: 'Father\'s Occupation',
            motherName: 'Mother\'s Name',
            motherOccupation: 'Mother\'s Occupation',
            siblings: 'Brother / Sister',
            contactPerson: 'Contact Person Name',
            contactNumber: 'Contact Number',
            residentialAddress: 'Residential Address',
            personalDetails: 'Personal Details',
            familyDetails: 'Family Details',
            contactDetails: 'Contact Details',
            createYourBiodata: 'Create Your Marriage Biodata',
            changeLanguage: 'Change Biodata Language',
            uploadImage: 'Upload Image',
            chooseTemplate: 'Choose Your Template',
            addNewField: 'Add New Field',
            addNewSection: 'Add New Section',
            resetForm: 'Reset Form',
            generateBiodata: 'Generate Biodata',
            enter: 'Enter',
            fieldName: 'Field Name',
            fieldLabel: 'Field Label',
            sectionName: 'Section Name',
            sectionFields: 'Section Fields',
            enterFieldName: 'Enter field name (e.g. Hobbies)',
            enterFieldLabel: 'Enter field label (e.g. Your Hobbies)',
            enterSectionName: 'Enter section name (e.g. Education Details)',
            cancel: 'Cancel',
            addField: 'Add Field',
            addSection: 'Add Section',
            confirmDeleteTitle: 'Are you sure?',
            confirmDeleteFieldText: 'Do you want to delete this field?',
            confirmDeleteSectionText: 'Do you want to delete this section?',
            yesDelete: 'Yes, delete it!',
            deleted: 'Deleted!',
            fieldDeleted: 'The field has been deleted.',
            sectionDeleted: 'The section has been deleted.',
            confirmResetTitle: 'Are you sure?',
            confirmResetText: 'Do you really want to reset the form?',
            yesReset: 'Yes, reset it!',
            resetSuccessful: 'Reset Successful!',
            formReset: 'The form has been reset.'
        },
        हिंदी: {
            name: 'नाम',
            dateOfBirth: 'जन्म तिथि',
            timeOfBirth: 'जन्म समय',
            placeOfBirth: 'जन्म स्थान',
            complexion: 'रंग',
            height: 'ऊंचाई',
            gotraCaste: 'गोत्र/जाति',
            occupation: 'व्यवसाय',
            income: 'आय',
            education: 'शिक्षा',
            fatherName: 'पिता का नाम',
            fatherOccupation: 'पिता का व्यवसाय',
            motherName: 'माता का नाम',
            motherOccupation: 'माता का व्यवसाय',
            siblings: 'भाई / बहन',
            contactPerson: 'संपर्क व्यक्ति नाम',
            contactNumber: 'संपर्क नंबर',
            residentialAddress: 'निवास पता',
            personalDetails: 'व्यक्तिगत विवरण',
            familyDetails: 'पारिवारिक विवरण',
            contactDetails: 'संपर्क विवरण',
            createYourBiodata: 'अपना विवाह बायोडाटा बनाएं',
            changeLanguage: 'बायोडाटा भाषा बदलें',
            uploadImage: 'तस्वीर अपलोड करें',
            chooseTemplate: 'अपना टेम्पलेट चुनें',
            addNewField: 'नया फील्ड जोड़ें',
            addNewSection: 'नया सेक्शन जोड़ें',
            resetForm: 'फॉर्म रीसेट करें',
            generateBiodata: 'बायोडाटा जनरेट करें',
            enter: 'दर्ज करें',
            fieldName: 'फील्ड नाम',
            fieldLabel: 'फील्ड लेबल',
            sectionName: 'सेक्शन नाम',
            sectionFields: 'सेक्शन फील्ड्स',
            enterFieldName: 'फील्ड नाम दर्ज करें (जैसे शौक)',
            enterFieldLabel: 'फील्ड लेबल दर्ज करें (जैसे आपके शौक)',
            enterSectionName: 'सेक्शन नाम दर्ज करें (जैसे शिक्षा विवरण)',
            cancel: 'रद्द करें',
            addField: 'फील्ड जोड़ें',
            addSection: 'सेक्शन जोड़ें',
            confirmDeleteTitle: 'क्या आप सुनिश्चित हैं?',
            confirmDeleteFieldText: 'क्या आप इस फील्ड को हटाना चाहते हैं?',
            confirmDeleteSectionText: 'क्या आप इस सेक्शन को हटाना चाहते हैं?',
            yesDelete: 'हाँ, हटाएँ!',
            deleted: 'हटा दिया गया!',
            fieldDeleted: 'फील्ड हटा दिया गया है।',
            sectionDeleted: 'सेक्शन हटा दिया गया है।',
            confirmResetTitle: 'क्या आप सुनिश्चित हैं?',
            confirmResetText: 'क्या आप वास्तव में फॉर्म रीसेट करना चाहते हैं?',
            yesReset: 'हाँ, रीसेट करें!',
            resetSuccessful: 'रीसेट सफल!',
            formReset: 'फॉर्म रीसेट हो गया है।'
        },
        मराठी: {
            name: 'नाव',
            dateOfBirth: 'जन्मतारीख',
            timeOfBirth: 'जन्मवेळ',
            placeOfBirth: 'जन्मस्थान',
            complexion: 'रंग',
            height: 'उंची',
            gotraCaste: 'गोत्र/जात',
            occupation: 'व्यवसाय',
            income: 'उत्पन्न',
            education: 'शिक्षण',
            fatherName: 'वडिलांचे नाव',
            fatherOccupation: 'वडिलांचा व्यवसाय',
            motherName: 'आईचे नाव',
            motherOccupation: 'आईचा व्यवसाय',
            siblings: 'भाऊ / बहीण',
            contactPerson: 'संपर्क व्यक्ती',
            contactNumber: 'संपर्क क्रमांक',
            residentialAddress: 'निवासी पत्ता',
            personalDetails: 'वैयक्तिक तपशील',
            familyDetails: 'कौटुंबिक तपशील',
            contactDetails: 'संपर्क तपशील नाव',
            createYourBiodata: 'तुमचा विवाह बायोडेटा तयार करा',
            changeLanguage: 'बायोडाटा भाषा बदला',
            uploadImage: 'प्रतिमा अपलोड करा',
            chooseTemplate: 'तुमचे टेम्पलेट निवडा',
            addNewField: 'नवीन फील्ड जोडा',
            addNewSection: 'नवीन विभाग जोडा',
            resetForm: 'फॉर्म रीसेट करा',
            generateBiodata: 'बायोडाटा जनरेट करा',
            enter: 'प्रविष्ट करा',
            fieldName: 'फील्ड नाव',
            fieldLabel: 'फील्ड लेबल',
            sectionName: 'विभाग नाव',
            sectionFields: 'विभाग फील्ड्स',
            enterFieldName: 'फील्ड नाव प्रविष्ट करा (उदा. छंद)',
            enterFieldLabel: 'फील्ड लेबल प्रविष्ट करा (उदा. तुमचे छंद)',
            enterSectionName: 'विभाग नाव प्रविष्ट करा (उदा. शैक्षणिक तपशील)',
            cancel: 'रद्द करा',
            addField: 'फील्ड जोडा',
            addSection: 'विभाग जोडा',
            confirmDeleteTitle: 'तुम्हाला खात्री आहे?',
            confirmDeleteFieldText: 'तुम्ही हे फील्ड हटवू इच्छिता?',
            confirmDeleteSectionText: 'तुम्ही हा विभाग हटवू इच्छिता?',
            yesDelete: 'होय, हटवा!',
            deleted: 'हटवले!',
            fieldDeleted: 'फील्ड हटवले गेले आहे.',
            sectionDeleted: 'विभाग हटवला गेला आहे.',
            confirmResetTitle: 'तुम्हाला खात्री आहे?',
            confirmResetText: 'तुम्हाला खरोखर फॉर्म रीसेट करायचे आहे?',
            yesReset: 'होय, रीसेट करा!',
            resetSuccessful: 'रीसेट यशस्वी!',
            formReset: 'फॉर्म रीसेट झाले आहे.'
        },
        বাংলা: {
            name: 'নাম',
            dateOfBirth: 'জন্ম তারিখ',
            timeOfBirth: 'জন্ম সময়',
            placeOfBirth: 'জন্মস্থান',
            complexion: 'বর্ণ',
            height: 'উচ্চতা',
            gotraCaste: 'গোত্র/জাতি',
            occupation: 'পেশা',
            income: 'আয়',
            education: 'শিক্ষা',
            fatherName: 'পিতার নাম',
            fatherOccupation: 'পিতার পেশা',
            motherName: 'মাতার নাম',
            motherOccupation: 'মাতার পেশা',
            siblings: 'ভাই / বোন',
            contactPerson: 'যোগাযোগ ব্যক্তি নাম',
            contactNumber: 'যোগাযোগ নম্বর',
            residentialAddress: 'বাসস্থানের ঠিকানা',
            personalDetails: 'ব্যক্তিগত বিবরণ',
            familyDetails: 'পারিবারিক বিবরণ',
            contactDetails: 'যোগাযোগের বিবরণ',
            createYourBiodata: 'আপনার বিবাহের বায়োডাটা তৈরি করুন',
            changeLanguage: 'বায়োডাটা ভাষা পরিবর্তন করুন',
            uploadImage: 'ছবি আপলোড করুন',
            chooseTemplate: 'আপনার টেমপ্লেট নির্বাচন করুন',
            addNewField: 'নতুন ফিল্ড যোগ করুন',
            addNewSection: 'নতুন বিভাগ যোগ করুন',
            resetForm: 'ফর্ম রিসেট করুন',
            generateBiodata: 'বায়োডাটা তৈরি করুন',
            enter: 'প্রবেশ করান',
            fieldName: 'ফিল্ডের নাম',
            fieldLabel: 'ফিল্ড লেবেল',
            sectionName: 'বিভাগের নাম',
            sectionFields: 'বিভাগের ফিল্ডসমূহ',
            enterFieldName: 'ফিল্ডের নাম লিখুন (যেমন: শখ)',
            enterFieldLabel: 'ফিল্ড লেবেল লিখুন (যেমন: আপনার শখ)',
            enterSectionName: 'বিভাগের নাম লিখুন (যেমন: শিক্ষার বিবরণ)',
            cancel: 'বাতিল',
            addField: 'ফিল্ড যোগ করুন',
            addSection: 'বিভাগ যোগ করুন',
            confirmDeleteTitle: 'আপনি কি নিশ্চিত?',
            confirmDeleteFieldText: 'আপনি কি এই ফিল্ডটি মুছে ফেলতে চান?',
            confirmDeleteSectionText: 'আপনি কি এই বিভাগটি মুছে ফেলতে চান?',
            yesDelete: 'হ্যাঁ, মুছে দিন!',
            deleted: 'মুছে ফেলা হয়েছে!',
            fieldDeleted: 'ফিল্ডটি মুছে ফেলা হয়েছে।',
            sectionDeleted: 'বিভাগটি মুছে ফেলা হয়েছে।',
            confirmResetTitle: 'আপনি কি নিশ্চিত?',
            confirmResetText: 'আপনি কি সত্যিই ফর্ম রিসেট করতে চান?',
            yesReset: 'হ্যাঁ, রিসেট করুন!',
            resetSuccessful: 'রিসেট সফল!',
            formReset: 'ফর্ম রিসেট করা হয়েছে।'
        },
        ગુજરાતી: {
            name: 'નામ',
            dateOfBirth: 'જન્મ તારીખ',
            timeOfBirth: 'જન્મ સમય',
            placeOfBirth: 'જન્મ સ્થળ',
            complexion: 'રંગ',
            height: 'ઊંચાઈ',
            gotraCaste: 'ગોત્ર/જ્ઞાતિ',
            occupation: 'વ્યવસાય',
            income: 'આવક',
            education: 'શિક્ષણ',
            fatherName: 'પિતાનું નામ',
            fatherOccupation: 'પિતાનો વ્યવસાય',
            motherName: 'માતાનું નામ',
            motherOccupation: 'માતાનો વ્યવસાય',
            siblings: 'ભાઈ / બહેન',
            contactPerson: 'સંપર્ક વ્યક્તિ',
            contactNumber: 'સંપર્ક નંબર',
            residentialAddress: 'નિવાસ સરનામું',
            personalDetails: 'વ્યક્તિગત વિગતો',
            familyDetails: 'કુટુંબ વિગતો',
            contactDetails: 'સંપર્ક વિગતો નામ',
            createYourBiodata: 'તમારો લગ્ન બાયોડેટા બનાવો',
            changeLanguage: 'બાયોડેટા ભાષા બદલો',
            uploadImage: 'છબી અપલોડ કરો',
            chooseTemplate: 'તમારું ટેમ્પલેટ પસંદ કરો',
            addNewField: 'નવું ફીલ્ડ ઉમેરો',
            addNewSection: 'નવો વિભાગ ઉમેરો',
            resetForm: 'ફોર્મ રીસેટ કરો',
            generateBiodata: 'બાયોડેટા જનરેટ કરો',
            enter: 'દાખલ કરો',
            fieldName: 'ફીલ્ડ નામ',
            fieldLabel: 'ફીલ્ડ લેબલ',
            sectionName: 'સેક્શન નામ',
            sectionFields: 'સેક્શન ફીલ્ડ્સ',
            enterFieldName: 'ફીલ્ડ નામ દાખલ કરો (દા.ત. શોખ)',
            enterFieldLabel: 'ફીલ્ડ લેબલ દાખલ કરો (દા.ત. તમારા શોખ)',
            enterSectionName: 'સેક્શન નામ દાખલ કરો (દા.ત. શિક્ષણ વિગતો)',
            cancel: 'રદ કરો',
            addField: 'ફીલ્ડ ઉમેરો',
            addSection: 'સેક્શન ઉમેરો',
            confirmDeleteTitle: 'શું તમને ખાતરી છે?',
            confirmDeleteFieldText: 'શું તમે આ ફીલ્ડ ડિલીટ કરવા માંગો છો?',
            confirmDeleteSectionText: 'શું તમે આ સેક્શન ડિલીટ કરવા માંગો છો?',
            yesDelete: 'હા, ડિલીટ કરો!',
            deleted: 'ડિલીટ થઈ ગયું!',
            fieldDeleted: 'ફીલ્ડ ડિલીટ થઈ ગયું છે.',
            sectionDeleted: 'સેક્શન ડિલીટ થઈ ગયું છે.',
            confirmResetTitle: 'શું તમને ખાતરી છે?',
            confirmResetText: 'શું તમે ખરેખર ફોર્મ રીસેટ કરવા માંગો છો?',
            yesReset: 'હા, રીસેટ કરો!',
            resetSuccessful: 'રીસેટ સફળ!'
        },
        தமிழ்: {
            name: 'பெயர்',
            dateOfBirth: 'பிறந்த தேதி',
            timeOfBirth: 'பிறந்த நேரம்',
            placeOfBirth: 'பிறந்த இடம்',
            complexion: 'நிறம்',
            height: 'உயரம்',
            gotraCaste: 'கோத்திரம்/சாதி',
            occupation: 'தொழில்',
            income: 'வருமானம்',
            education: 'கல்வி',
            fatherName: 'தந்தையின் பெயர்',
            fatherOccupation: 'தந்தையின் தொழில்',
            motherName: 'தாயின் பெயர்',
            motherOccupation: 'தாயின் தொழில்',
            siblings: 'சகோதரர் / சகோதரி',
            contactPerson: 'தொடர்பு நபர் பெயர்',
            contactNumber: 'தொடர்பு எண்',
            residentialAddress: 'வசிக்கும் முகவரி',
            personalDetails: 'தனிப்பட்ட விவரங்கள்',
            familyDetails: 'குடும்ப விவரங்கள்',
            contactDetails: 'தொடர்பு விவரங்கள்',
            createYourBiodata: 'உங்கள் திருமண பயோடேட்டாவை உருவாக்கவும்',
            changeLanguage: 'உயிரியல் தரவு மொழியை மாற்றவும்',
            uploadImage: 'படத்தை பதிவேற்றவும்',
            chooseTemplate: 'உங்கள் டெம்ப்ளேட்டைத் தேர்ந்தெடுக்கவும்',
            addNewField: 'புதிய புலத்தைச் சேர்க்கவும்',
            addNewSection: 'புதிய பிரிவைச் சேர்க்கவும்',
            resetForm: 'படிவத்தை மீட்டமைக்கவும்',
            generateBiodata: 'உயிரியல் தரவை உருவாக்கவும்',
            enter: 'உள்ளிடவும்',
            fieldName: 'புலத்தின் பெயர்',
            fieldLabel: 'புல லேபிள்',
            sectionName: 'பிரிவு பெயர்',
            sectionFields: 'பிரிவு புலங்கள்',
            enterFieldName: 'புலத்தின் பெயரை உள்ளிடவும் (எ.கா. பொழுதுபோக்குகள்)',
            enterFieldLabel: 'புல லேபிளை உள்ளிடவும் (எ.கா. உங்கள் பொழுதுபோக்குகள்)',
            enterSectionName: 'பிரிவு பெயரை உள்ளிடவும் (எ.கா. கல்வி விவரங்கள்)',
            cancel: 'ரத்து செய்',
            addField: 'புலத்தைச் சேர்க்கவும்',
            addSection: 'பிரிவைச் சேர்க்கவும்',
            confirmDeleteTitle: 'நீங்கள் உறுதியாக இருக்கிறீர்களா?',
            confirmDeleteFieldText: 'இந்த புலத்தை நீக்க விரும்புகிறீர்களா?',
            confirmDeleteSectionText: 'இந்த பிரிவை நீக்க விரும்புகிறீர்களா?',
            yesDelete: 'ஆம், நீக்குக!',
            deleted: 'நீக்கப்பட்டது!',
            fieldDeleted: 'புலம் நீக்கப்பட்டது.',
            sectionDeleted: 'பிரிவு நீக்கப்பட்டது.',
            confirmResetTitle: 'நீங்கள் உறுதியாக இருக்கிறீர்களா?',
            confirmResetText: 'நீங்கள் உண்மையில் படிவத்தை மீட்டமைக்க விரும்புகிறீர்களா?',
            yesReset: 'ஆம், மீட்டமைக்க!',
            resetSuccessful: 'மீட்டமைப்பு வெற்றிகரமாக!',
            formReset: 'படிவம் மீட்டமைக்கப்பட்டது.'
        }
        // Add translations for other languages similarly
    });

    const handleLanguageChange = (language) => {
        setCurrentLanguage(language);
        setDropdownOpen(false);

        // Update field labels
        const newFieldLabels = { ...fieldLabels };
        Object.keys(newFieldLabels).forEach(key => {
            if (translations[language] && translations[language][key]) {
                newFieldLabels[key] = translations[language][key];
            }
        });
        setFieldLabels(newFieldLabels);
    };

    // PDF preview modal state
    const [showPdfPreview, setShowPdfPreview] = useState(false);

    // State for selected template
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    useEffect(() => {
        if (selectedTemplate) {
            setLoading(true);
            const timeout = setTimeout(() => {
                setLoading(false);
            }, 2000); // 1 second delay

            return () => clearTimeout(timeout); // cleanup
        }
    }, [selectedTemplate]);


    useEffect(() => {
        // Get selected template on initial load
        const template = sessionStorage.getItem('selectedTemplate');
        if (template) {
            setSelectedTemplate(template);
        }

        // Listen for storage events (when localStorage changes in another tab)
        const handleStorageChange = (e) => {
            if (e.key === 'selectedTemplate') {
                setSelectedTemplate(e.newValue);
                // Scroll to form after template selection
                scrollToTemplates();
            }
        };

        // Listen for our custom template selection event
        const handleTemplateSelected = (e) => {
            setSelectedTemplate(e.detail.template);
            // Scroll to form after template selection
            scrollToTemplates();
        };

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('templateSelected', handleTemplateSelected);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('templateSelected', handleTemplateSelected);
        };
    }, [scrollToTemplates]); // Add scrollToTemplates to dependencies

    const formatTimeWithAmPm = (timeString) => {
        if (!timeString) return '-';

        const [hours, minutes] = timeString.split(':');
        const hourNum = parseInt(hours, 10);
        const period = hourNum >= 12 ? 'PM' : 'AM';
        const hour12 = hourNum % 12 || 12;

        return `${hour12}:${minutes} ${period}`;
    };

    // Update the handleChange function in your BiodataForm.jsx
    const handleChange = (e) => {
        const { name, value } = e.target;

        // List of fields that should only accept text (letters and spaces)
        const textOnlyFields = [
            'name',
            'placeOfBirth',
            'complexion',
            'gotraCaste',
            'occupation',
            'education',
            'fatherName',
            'fatherOccupation',
            'motherName',
            'motherOccupation',
            'siblings',
            'contactPerson'
        ];

        // Validate numeric fields (supporting Indian numerals)
        if (name === 'height' || name === 'income' || name === 'contactNumber') {
            // Allow English and major Indian numerals
            if (value && !/^[\d०-९૦-૯௦-௯౦-౯೦-೯൦-൯০-৯]+\.?[\d०-९૦-૯௦-௯౦-౯೦-೯൦-൯০-৯]*$/.test(value)) {
                return;
            }
        }

        // Validate text-only fields - allow all Indian language characters
        if (textOnlyFields.includes(name)) {
            // Allow letters (including all Indian scripts), spaces, and common Indian punctuation
            if (value && !/^[\p{L}\p{M}\s'-]+$/u.test(value)) {
                return; // Don't update the field if it contains invalid characters
            }
        }

        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    // Handle profile image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (!validTypes.includes(file.type)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid File Type',
                text: 'Please upload a JPG or PNG image file',
                confirmButtonColor: '#051145'
            });
            return;
        }

        const maxSize = 2 * 1024 * 1024; // 2MB
        if (file.size > maxSize) {
            Swal.fire({
                icon: 'error',
                title: 'File Too Large',
                text: 'Image must be less than 2MB',
                confirmButtonColor: '#051145'
            });
            return;
        }

        // This check ensures it only runs in the browser
        if (typeof window !== 'undefined') {
            const reader = new FileReader();
            reader.onload = () => {
                const img = new window.Image(); // For SSR-safe
                img.onload = () => {
                    if (img.width > 1600 || img.height > 1600) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Invalid Image Dimensions',
                            text: 'Image must be 1600x1600 pixels or smaller',
                            confirmButtonColor: '#051145'
                        });
                        return;
                    }
                    setProfileImage(reader.result);
                };
                img.src = reader.result;
            };
            reader.readAsDataURL(file);
        }

    };

    // Move a field up in order
    const moveFieldUp = (section, index) => {
        if (index === 0) return; // Already at the top

        const newOrder = [...fieldOrder[section]];
        [newOrder[index], newOrder[index - 1]] = [newOrder[index - 1], newOrder[index]];
        setFieldOrder({
            ...fieldOrder,
            [section]: newOrder
        });
    };

    // Move a field down in order
    const moveFieldDown = (section, index) => {
        if (index === fieldOrder[section].length - 1) return; // Already at the bottom

        const newOrder = [...fieldOrder[section]];
        [newOrder[index], newOrder[index + 1]] = [newOrder[index + 1], newOrder[index]];
        setFieldOrder({
            ...fieldOrder,
            [section]: newOrder
        });
    };

    // Delete a field
    const deleteField = (section, fieldName) => {
        Swal.fire({
            title: translations[currentLanguage].confirmDeleteTitle || 'Are you sure?',
            text: translations[currentLanguage].confirmDeleteFieldText || `Do you want to delete the "${fieldLabels[fieldName]}" field?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#051145',
            cancelButtonColor: '#1b7261',
            confirmButtonText: translations[currentLanguage].yesDelete || 'Yes, delete it!',
            cancelButtonText: translations[currentLanguage].cancel || 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                const newOrder = fieldOrder[section].filter(field => field !== fieldName);

                // Also remove from formData (optional)
                const newFormData = { ...formData };
                delete newFormData[fieldName];

                setFieldOrder({
                    ...fieldOrder,
                    [section]: newOrder
                });

                setFormData(newFormData);

                Swal.fire(
                    translations[currentLanguage].deleted || 'Deleted!',
                    translations[currentLanguage].fieldDeleted || 'The field has been deleted.',
                    'success'
                );
            }
        });
    };

    // Open add field modal
    const addNewField = (section) => {
        setCurrentSection(section);
        setNewFieldName('');
        setNewFieldLabel('');
        setShowAddFieldModal(true);
    };

    // Handle add field form submission
    const handleAddField = () => {
        if (!newFieldLabel) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Field label is required!',
                confirmButtonColor: '#051145'
            });
            return;
        }

        const formattedFieldName = newFieldLabel
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '');

        if (formData.hasOwnProperty(formattedFieldName)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Field already exists!',
                confirmButtonColor: '#051145'
            });
            return;
        }

        // Update field labels with correct key-value pair
        setFieldLabels({
            ...fieldLabels,
            [formattedFieldName]: newFieldLabel,
        });

        // Update form data
        setFormData({
            ...formData,
            [formattedFieldName]: '',
        });

        // Update field order
        setFieldOrder({
            ...fieldOrder,
            [currentSection]: [...fieldOrder[currentSection], formattedFieldName],
        });

        // Show success alert
        Swal.fire({
            icon: 'success',
            title: 'Field Added',
            text: `"${newFieldLabel}" has been added successfully.`,
            timer: 1500,
            showConfirmButton: false
        });

        // Close modal and reset
        setShowAddFieldModal(false);
        setNewFieldName('');
        setNewFieldLabel('');
    };

    // Open add section modal
    const addNewSection = () => {
        setNewSectionName('');
        setSectionFields([{ name: '', label: '' }]);
        setShowAddSectionModal(true);
    };

    // Add another field to the new section
    const addSectionField = () => {
        setSectionFields([...sectionFields, { name: '', label: '' }]);
    };

    // Update section field value
    const updateSectionField = (index, key, value) => {
        const updatedFields = [...sectionFields];
        updatedFields[index][key] = value;
        setSectionFields(updatedFields);
    };

    // Handle add section form submission
    const handleAddSection = () => {
        if (!newSectionName || sectionFields.some(field => !field.label)) return;

        const sectionKey = newSectionName
            .trim()
            .toLowerCase()
            .replace(/\s+(.)/g, (match, group) => group.toUpperCase());

        if (fieldOrder.hasOwnProperty(sectionKey)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Section name already exists!',
                confirmButtonColor: '#051145'
            });
            return;
        }

        const fieldKeys = [];
        const newLabels = { ...fieldLabels };
        const newFormDataFields = { ...formData };

        sectionFields.forEach(field => {
            const fieldKey = field.label
                .toLowerCase()
                .replace(/\s+(.)/g, (match, group) => group.toUpperCase());

            fieldKeys.push(fieldKey);
            newLabels[fieldKey] = field.label;
            newFormDataFields[fieldKey] = '';
        });

        setFieldLabels(newLabels);
        setFormData(newFormDataFields);
        setFieldOrder({
            ...fieldOrder,
            [sectionKey]: fieldKeys
        });
        setSections({
            ...sections,
            [sectionKey]: true
        });

        setShowAddSectionModal(false);

        // 🎉 Show success alert
        Swal.fire({
            icon: 'success',
            title: 'Section Added!',
            text: `"${newSectionName}" section has been added successfully.`,
            timer: 2000,
            showConfirmButton: false
        });
    };

    // Validate form
    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.name?.trim()) {
            tempErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.dateOfBirth) {
            tempErrors.dateOfBirth = 'Date of Birth is required';
            isValid = false;
        }

        // Updated contact number validation for all Indian numerals
        if (!formData.contactNumber || !/^[\d٠-٩۰-۹०-९૦-૯௦-௯౦-౯೦-೯൦-൯๐-๙໐-໙၀-၉០-៩༠-༩႐-႙]{10}$/.test(formData.contactNumber)) {
            tempErrors.contactNumber = translations[currentLanguage].contactNumberError || 'Please enter a valid 10-digit phone number';
            isValid = false;
        }

        if (!profileImage) {
            tempErrors.profileImage = 'Profile image is required';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    // Updated MyDocument component with proper font handling
    const MyDocument = ({ formData, profileImage, selectedTemplate, fieldLabels, fieldOrder, sections, currentLanguage, translations }) => {
        const getFontFamily = () => {
            switch (currentLanguage) {
                case 'हिंदी':
                case 'मराठी':
                    return 'NotoSansDevanagari';
                case 'ગુજરાતી':
                    return 'NotoSansGujarati';
                case 'தமிழ்':
                    return 'NotoSansTamil';
                case 'తెలుగు':
                    return 'NotoSansTelugu';
                case 'বাংলা':
                    return 'NotoSansBengali';
                default:
                    return 'NotoSans';
            }
        };

        const fontFamily = getFontFamily();

        const dynamicStyles = StyleSheet.create({
            page: {
                ...styles.page,
                fontFamily: fontFamily
            },
            text: {
                fontFamily: fontFamily
            },
            header: {
                ...styles.header,
                fontFamily: fontFamily
            },
            name: {
                ...styles.name,
                fontFamily: fontFamily
            },
            subtitle: {
                ...styles.subtitle,
                fontFamily: fontFamily
            },
            sectionTitle: {
                ...styles.sectionTitle,
                fontFamily: fontFamily
            },
            fieldName: {
                ...styles.fieldName,
                fontFamily: fontFamily
            },
            fieldValue: {
                ...styles.fieldValue,
                fontFamily: fontFamily
            }
        });

        return (
            <Document>
                <Page size="A4" style={dynamicStyles.page}>
                    {selectedTemplate && (
                        <View style={styles.templateBackground}>
                            <Image src={selectedTemplate} style={styles.templateImage} />
                        </View>
                    )}
                    <View style={styles.contentContainer}>
                        <View style={styles.header}>
                            {profileImage && (
                                <Image style={styles.profileImage} src={profileImage} />
                            )}
                            <View>
                                <Text style={dynamicStyles.name}>
                                    {formData.name || translations[currentLanguage].name}
                                </Text>
                                <Text style={dynamicStyles.subtitle}>Biodata</Text>
                            </View>
                        </View>

                        {Object.keys(sections).map(section => (
                            sections[section] && (
                                <View key={section} style={styles.section}>
                                    <Text style={dynamicStyles.sectionTitle}>
                                        {translations[currentLanguage][`${section}Details`] ||
                                            section.charAt(0).toUpperCase() + section.slice(1)}
                                    </Text>

                                    <View style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
                                        {fieldOrder[section]?.map((fieldName) => (
                                            <View key={fieldName} style={styles.fieldRow}>
                                                <Text style={dynamicStyles.fieldName}>
                                                    {translations[currentLanguage][fieldName] || fieldLabels[fieldName]} :-
                                                </Text>
                                                <Text style={dynamicStyles.fieldValue}>
                                                    {fieldName === 'timeOfBirth'
                                                        ? formatTimeWithAmPm(formData[fieldName])
                                                        : formData[fieldName] || '-'}
                                                </Text>
                                            </View>
                                        ))}
                                    </View>
                                </View>
                            )
                        ))}
                    </View>

                    <Text style={{ ...styles.footer, fontFamily: fontFamily }}>
                        COPYRIGHT © 2025 Wedding Biodata, All rights Reserved.
                    </Text>
                </Page>
            </Document>
        );
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            if (!selectedTemplate) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Template Required',
                    text: 'Please select a template first!',
                    confirmButtonColor: '#051145'
                }).then(() => {
                    scrollToTemplates(); // Scroll after alert is closed
                });
                return;
            }

            // Show preview
            setShowPdfPreview(true);
        } else {
            console.log('Form validation failed');
        }
    };

    // Download pdf
    const handleDownloadPDF = async () => {
        if (!validateForm()) return;

        if (!selectedTemplate) {
            Swal.fire({
                icon: 'warning',
                title: 'Template Required',
                text: 'Please select a template first!',
                confirmButtonColor: '#051145'
            }).then(() => {
                scrollToTemplates();
            });
            return;
        }

        const doc = (
            <MyDocument
                formData={formData}
                profileImage={profileImage}
                selectedTemplate={selectedTemplate}
                fieldLabels={fieldLabels}
                fieldOrder={fieldOrder}
                sections={sections}
                currentLanguage={currentLanguage}
                translations={translations}
            />
        );

        const asPdf = pdf([]);
        asPdf.updateContainer(doc);
        const blob = await asPdf.toBlob();
        saveAs(blob, `${formData.name || 'biodata'}.pdf`);
    };

    // Remove section
    const removeSection = (section) => {
        Swal.fire({
            title: translations[currentLanguage].confirmDeleteTitle || 'Are you sure?',
            text: translations[currentLanguage].confirmDeleteSectionText || `Do you want to delete the "${translations[currentLanguage][`${section}Details`] || section}" section?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#051145',
            cancelButtonColor: '#1b7261',
            confirmButtonText: translations[currentLanguage].yesDelete || 'Yes, delete it!',
            cancelButtonText: translations[currentLanguage].cancel || 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                setSections({
                    ...sections,
                    [section]: false,
                });

                Swal.fire(
                    translations[currentLanguage].deleted || 'Deleted!',
                    translations[currentLanguage].sectionDeleted || 'The section has been deleted.',
                    'success'
                );
            }
        });
    };

    // Reset form
    const resetForm = () => {
        Swal.fire({
            title: translations[currentLanguage].confirmResetTitle || 'Are you sure?',
            text: translations[currentLanguage].confirmResetText || 'Do you really want to reset the form?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#051145',
            cancelButtonColor: '#1b7261',
            confirmButtonText: translations[currentLanguage].yesReset || 'Yes, reset it!',
            cancelButtonText: translations[currentLanguage].cancel || 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {

                // Form reset
                setFormData({
                    name: '',
                    dateOfBirth: '',
                    timeOfBirth: '',
                    placeOfBirth: '',
                    complexion: '',
                    height: '',
                    gotraCaste: '',
                    occupation: '',
                    income: '',
                    education: '',
                    fatherName: '',
                    fatherOccupation: '',
                    motherName: '',
                    motherOccupation: '',
                    siblings: '',
                    contactPerson: '',
                    contactNumber: '',
                    residentialAddress: ''
                });

                setProfileImage(null);
                setErrors({});
                setSections({
                    personal: true,
                    family: true,
                    contact: true,
                });

                setFieldOrder({
                    personal: ['name', 'dateOfBirth', 'timeOfBirth', 'placeOfBirth', 'complexion', 'height', 'gotraCaste', 'occupation', 'income', 'education'],
                    family: ['fatherName', 'fatherOccupation', 'motherName', 'motherOccupation', 'siblings'],
                    contact: ['contactPerson', 'contactNumber', 'residentialAddress']
                });

                // Reset labels
                const defaultLabels = {};
                Object.keys(formData).forEach((key) => {
                    defaultLabels[key] = translations[currentLanguage][key] || key;
                });
                setFieldLabels(defaultLabels);

                // ❗ Remove selected template from sessionStorage & state
                sessionStorage.removeItem('selectedTemplate');
                setSelectedTemplate(null);

                // Scroll back to template section
                scrollToTemplates();

                Swal.fire({
                    title: translations[currentLanguage].resetSuccessful || 'Reset Successful!',
                    text: translations[currentLanguage].formReset || 'The form has been reset.',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                });
            }
        });
    };

    // Render a form field based on its type
    const renderField = (section, fieldName, index) => {
        let inputElement;

        switch (fieldName) {
            case 'dateOfBirth':
                inputElement = (
                    <input
                        type="date"
                        name={fieldName}
                        value={formData[fieldName]}
                        onChange={handleChange}
                        className={`OpenSans-font w-full sm:w-[48%] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors[fieldName] ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#1B7261]'}`}
                    />
                );
                break;
            case 'timeOfBirth':
                inputElement = (
                    <input
                        type="time"
                        name={fieldName}
                        value={formData[fieldName]}
                        onChange={handleChange}
                        className="OpenSans-font w-full sm:w-[48%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B7261]"
                    />
                );
                break;
            case 'contactNumber':
                inputElement = (
                    <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        name={fieldName}
                        value={formData[fieldName]}
                        onChange={handleChange}
                        placeholder={`${translations[currentLanguage].enter} ${fieldLabels[fieldName]}`}
                        className={`OpenSans-font w-full sm:w-[48%] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors[fieldName] ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#1B7261]'}`}
                    />
                );
                break;
            default:
                inputElement = (
                    <input
                        type="text"
                        name={fieldName}
                        value={formData[fieldName]}
                        onChange={handleChange}
                        placeholder={`${translations[currentLanguage].enter} ${fieldLabels[fieldName]}`}
                        className={`OpenSans-font w-full sm:w-[48%] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors[fieldName] ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-[#1B7261]'}`}
                    />
                );
        }

        return (
            <div key={fieldName} className="relative flex items-center mb-3 sm:mb-2">
                <div className="flex-grow">
                    <label className="OpenSans-font w-full mb-1 sm:mb-0 sm:w-[48%] inline-block px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200  mr-3">{fieldLabels[fieldName]}</label>
                    {inputElement}
                    {errors[fieldName] && <p className="text-red-500 text-xs mt-1">{errors[fieldName]}</p>}
                </div>

                <div className="flex flex-col ml-2 gap-1">
                    {/* Up Button */}
                    <button
                        type="button"
                        className="w-7 h-7 flex items-center justify-center rounded-full border border-[#1b7261] bg-transparent text-black hover:text-white hover:bg-[#1b7261] active:bg-[#1b7261] transition duration-200 group"
                        onClick={() => moveFieldUp(section, index)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play size-4 -rotate-90 fill-current"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </button>

                    {/* Down Button */}
                    <button
                        type="button"
                        className="w-7 h-7 flex items-center justify-center rounded-full border border-[#1b7261] bg-transparent text-black hover:text-white hover:bg-[#1b7261] active:bg-[#1b7261] transition duration-200 group"
                        onClick={() => moveFieldDown(section, index)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play size-4 rotate-90 fill-current"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </button>
                </div>

                {/* Delete Button */}
                <button
                    type="button"
                    className="p-1 ml-2 w-9 h-9 rounded-full border border-[#1b7261] flex items-center justify-center text-black hover:text-white hover:bg-[#1b7261] transition-colors duration-200"
                    onClick={() => deleteField(section, fieldName)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2 "><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
                </button>

            </div>
        );
    };

    // Render section
    const renderSection = (sectionKey) => {
        const sectionLabel = sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1);

        return (
            <div key={sectionKey} className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                        {translations[currentLanguage][`${sectionKey}Details`] ||
                            (sectionKey === 'personal' ? translations[currentLanguage].personalDetails :
                                sectionKey === 'family' ? translations[currentLanguage].familyDetails :
                                    sectionKey === 'contact' ? translations[currentLanguage].contactDetails :
                                        sectionLabel)}
                        <button
                            type="button"
                            className="ml-2 text-gray-500 hover:text-[#051145]"
                        >
                        </button>
                    </h2>
                    <button
                        type="button"
                        onClick={() => removeSection(sectionKey)}
                        className="ml-2 w-9 h-9 rounded-full border border-[#1b7261] flex items-center justify-center text-black hover:text-white hover:bg-[#1b7261] transition-colors duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2 "><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
                    </button>
                </div>

                <div className="space-y-1">
                    {fieldOrder[sectionKey]?.map((fieldName, index) =>
                        renderField(sectionKey, fieldName, index)
                    )}
                </div>

                <div className="mt-4">

                    <button className="create-btn"
                        onClick={() => addNewField(sectionKey)}
                    >
                        <span className='OpenSans-font flex'> <FaPlus  className='mr-1'/>{translations[currentLanguage].addNewField}</span>
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen py-8 sm:px-6 lg:px-8 bg-image">
            <div className="relative z-10">
                <div>
                    <div className="text-center my-8">
                        <h2
                            className={`text-[28px] ${currentLanguage === 'தமிழ்' ? 'sm:text-[40px]' : 'sm:text-[45px]'} text-[#FFFF] font-bold mb-3`}
                        >
                            {translations[currentLanguage].createYourBiodata}
                        </h2>
                    </div>

                    <div className='flex justify-center lg:block text-center mb-8 relative'> {/* Added relative here */}
                        <button
                            className="relative flex items-center bg-white rounded-lg shadow-2xl py-3 px-5 ml-2 sm:ml-0"
                            onClick={() => setDropdownOpen(!isDropdownOpen)}
                        >
                            <p className='text-[#1b7261] hover:text-[#051145] font-medium'>Change Biodata Language</p>
                            <svg className="size-8 text-[#1b7261] hover:text-[#051145]" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Translate</title><path d="M21.056 12h-2a1 1 0 000 2v2H17.87a2.965 2.965 0 00.185-1 3 3 0 00-5.598-1.5 1 1 0 101.732 1 1 1 0 01.866-.5 1 1 0 010 2 1 1 0 000 2 1 1 0 110 2 1 1 0 01-.866-.5 1 1 0 10-1.732 1 3 3 0 005.598-1.5 2.965 2.965 0 00-.185-1h1.185v3a1 1 0 002 0v-7a1 1 0 100-2zm-11.97-.757a1 1 0 101.94-.486l-1.757-7.03a2.28 2.28 0 00-4.425 0l-1.758 7.03a1 1 0 101.94.486L5.585 9h2.94zM6.086 7l.697-2.787a.292.292 0 01.546 0L8.026 7zm7.97 0h1a1.001 1.001 0 011 1v1a1 1 0 002 0V8a3.003 3.003 0 00-3-3h-1a1 1 0 000 2zm-4 9h-1a1.001 1.001 0 01-1-1v-1a1 1 0 00-2 0v1a3.003 3.003 0 003 3h1a1 1 0 000-2z"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1b7261] hover:text-[#051145] lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                        </button>

                        {/* Language Dropdown */}
                        {isDropdownOpen && (
                            <div className="absolute left-[50%] top-[100%] lg:left-[8%] lg:top-[100%]  transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-md z-[999]">
                                <ul className="text-[#1b7261] font-medium">
                                    {['English', 'हिंदी', 'मराठी', 'বাংলা', 'ગુજરાતી', 'தமிழ்'].map((lang) => (
                                        <li
                                            key={lang}
                                            className="hover:bg-[#1b7261] hover:text-white px-4 py-2 cursor-pointer"
                                            onClick={() => handleLanguageChange(lang)}
                                        >
                                            {lang}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className='flex flex-col-reverse items-center lg:items-stretch lg:flex-row justify-between'>

                        <div className="bg-white shadow-md rounded-lg p-6 mb-8 w-[98%] lg:w-[58%] xl:w-[65%]">
                            <div className="flex justify-between mb-6">
                                <div className="relative w-28 h-28 sm:w-32 sm:h-32 bg-gray-100 rounded-full overflow-hidden border-2 border-gray-300">
                                    {profileImage ? (
                                        <img src={profileImage} alt="Profile" className="w-full h-full object-fill" />
                                    ) : (

                                        <div className='flex items-center py-10 justify-evenly flex-col'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-camera">
                                                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                                                <circle cx="12" cy="13" r="3"></circle>
                                            </svg>

                                            {/* Label or Error */}
                                            {errors.profileImage ? (
                                                <p className="text-red-500 text-[8px] sm:text-[14px] mt-2 text-center">{errors.profileImage}</p>
                                            ) : (
                                                <p className={`OpenSans-font font-bold ${currentLanguage === 'தமிழ்' ? 'text-[9px] sm:text-[12px]' : 'text-[13px] sm:text-[16px]'} text-center`}>
                                                    {translations[currentLanguage].uploadImage}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                    <input
                                        type="file"
                                        id="profileImage"
                                        accept="image/*"
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                        onChange={handleImageUpload}
                                    />
                                </div>
                            </div>

                            <form onSubmit={handleSubmit}>
                                {/* Render all visible sections */}
                                {Object.keys(sections).map(section => (
                                    sections[section] && renderSection(section)
                                ))}

                                {/* Form Buttons */}
                                <div className="flex flex-col sm:flex-row justify-between mt-8">
                                    <button className="create-btn mb-4 sm:mb-0"
                                        onClick={addNewSection}
                                    >
                                        <span className='OpenSans-font flex justify-center'><FaPlus className='mr-1' /> {translations[currentLanguage].addNewSection}</span>
                                    </button>

                                    <div className='flex flex-col sm:flex-row justify-between'>
                                        <button className="create-btn mb-4 sm:mb-0"
                                            onClick={resetForm}
                                        >
                                            <span className='OpenSans-font flex justify-center'><VscDebugRestart className='mr-1 text-[16px]' /> {translations[currentLanguage].resetForm}</span>
                                        </button>

                                        <button className="create-btn ml-0 sm:ml-8"
                                            onClick={handleDownloadPDF}
                                        >
                                            <span className='OpenSans-font flex justify-center'><FaFilePdf className='mr-1 text-[16px]'/> {translations[currentLanguage].generateBiodata}</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>


                        <div className='flex justify-center w-full lg:w-[40%] xl:w-[38%] relative'>
                            <div
                                className='sticky top-[20px] mb-[30px] w-[90%] md:w-[95%] xl:w-[88%] h-[700px] lg:h-[750px] bg-gray-100 rounded-2xl overflow-hidden border-2 border-gray-300 cursor-pointer'
                            >
                                {selectedTemplate ? (
                                    loading ? (
                                        <div className="flex justify-center items-center h-full">
                                            <DataLoader />
                                        </div>
                                    ) : (
                                        <div className="relative w-full h-full">
                                            <PDFPreview
                                                formData={formData}
                                                profileImage={profileImage}
                                                selectedTemplate={selectedTemplate}
                                                fieldLabels={fieldLabels}
                                                fieldOrder={fieldOrder}
                                                sections={sections}
                                                translations={translations}
                                                currentLanguage={currentLanguage}
                                            />
                                        </div>
                                    )
                                ) : (
                                    <div onClick={scrollToTemplates}>
                                        <p className={`font-bold text-[30px] flex items-center justify-center text-center h-[700px] lg:h-[750px] py-9 px-3`}>
                                            {translations[currentLanguage].chooseTemplate}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add Field Modal */}
                <AddFieldModal
                    show={showAddFieldModal}
                    onClose={() => setShowAddFieldModal(false)}
                    onAdd={handleAddField}
                    newFieldLabel={newFieldLabel}
                    setNewFieldLabel={setNewFieldLabel}
                    currentLanguage={currentLanguage}
                    translations={translations}
                />

                {/* Add Section Modal */}
                <AddSectionModal
                    show={showAddSectionModal}
                    onClose={() => setShowAddSectionModal(false)}
                    onAdd={handleAddSection}
                    newSectionName={newSectionName}
                    setNewSectionName={setNewSectionName}
                    sectionFields={sectionFields}
                    setSectionFields={setSectionFields}
                    addSectionField={addSectionField}
                    updateSectionField={updateSectionField}
                    currentLanguage={currentLanguage}
                    translations={translations}
                />
            </div>
        </div>
    );
};

export default BiodataForm;