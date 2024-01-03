import { useEffect } from 'react'
import Image from 'next/image'

import Header from '../components/header'
import Footer from '../components/footer'
import { importJS } from '../helpers/importJS'

import Box from '@mui/material/Box';

export default function AboutUs() {

    useEffect(() => {
      importJS()
    }, [])

  return (
    <>
      <Header />

      <main id="main">
        <br /><br /><br />

        <Box id="features" className="features" sx={{p: {
            xs: 2,
            sm: 5,
            md: 10,
            lg: 20,
            xl: 30,
        }, pt: '0px !important', pb: '0px !important'}}>
        <section id="features" className="features">

            <h2 style={{}}>Anti Bribery &amp; Anti Corruption Policy</h2>
            <div
                className="clear height-30"
                style={{
                boxSizing: "border-box",
                margin: 0,
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "inherit",
                fontFamily:
                    '"Droid Sans", sans-serif, "Droid Sans", sans-serif, sans-serif',
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                clear: "both",
                height: 30,
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)"
                }}
            >
                &nbsp;
            </div>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)"
                }}
            >
                <strong style={{ boxSizing: "border-box" }}>
                Nilai dan Kebijakan/Prinsip Anti&nbsp;
                </strong>
                <strong style={{ boxSizing: "border-box" }}>Korupsi</strong>
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)"
                }}
            >
                &nbsp;
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)"
                }}
            >
                Nilai-nilai anti korupsi berjumlah 9 buah, yaitu :
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)"
                }}
            >
                <strong style={{ boxSizing: "border-box" }}>
                <strong style={{ boxSizing: "border-box" }}>
                    <em
                    style={{
                        boxSizing: "border-box",
                        margin: 0,
                        padding: 0,
                        border: 0,
                        fontVariant: "inherit",
                        fontWeight: "inherit",
                        fontStretch: "inherit",
                        fontSize: "inherit",
                        lineHeight: "inherit",
                        fontFamily: "inherit",
                        fontOpticalSizing: "inherit",
                        fontKerning: "inherit",
                        fontFeatureSettings: "inherit",
                        fontVariationSettings: "inherit",
                        verticalAlign: "baseline"
                    }}
                    >
                    1. Kejujuran
                    </em>
                </strong>
                </strong>
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                Kejujuran berasal dari kata jujur yang dapat di definisikan sebagai sebuah
                tindakan maupun ucapan yang lurus, tidak berbohong dan tidak curang. Dalam
                berbagai buku juga disebutkan bahwa jujur memiliki makna satunya kata dan
                perbuatan. Jujur ilah merupakan salah satu nilai yang paling utama dalam
                anti korupsi, karena tanpa kejujuran seseorang tidak akan mendapat
                kepercayaan dalam berbagai hal, termasuk dalam kehidupan sosial. Bagi
                seorang mahasiswa kejujuran sangat penting dan dapat diwujudkan dalam bentuk
                tidak melakukan kecurangan akademik, misalnya tidak mencontek, tidak
                melakukan plagiarisme dan tidak memalsukan nilai. Lebih luas, contoh
                kejujuran secara umum dimasyarakat ialah dengan selalu berkata jujur, jujur
                dalam menunaikan tugas dan kewajiban, misalnya sebagai seorang aparat
                penegak hukum ataupun sebagai masyarakat umum dengan membaya pajak.
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)"
                }}
            >
                <strong style={{ boxSizing: "border-box" }}>
                <em
                    style={{
                    boxSizing: "border-box",
                    margin: 0,
                    padding: 0,
                    border: 0,
                    fontVariant: "inherit",
                    fontWeight: "inherit",
                    fontStretch: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    fontFamily: "inherit",
                    fontOpticalSizing: "inherit",
                    fontKerning: "inherit",
                    fontFeatureSettings: "inherit",
                    fontVariationSettings: "inherit",
                    verticalAlign: "baseline"
                    }}
                >
                    2. Kepedulian
                </em>
                </strong>
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                Arti kata peduli adalah mengindahkan, memperhatikan dan menghiraukan. Rasa
                kepedulian dapat dilakukan terhadap lingkungan sekitar dan berbagai hal yang
                berkembang didalamnya.Nilai kepedulian sebagai mahasiswa dapat diwujudkan
                dengan berusaha memantau jalannya proses pembelajaran, memantau sistem
                pengelolaan sumber daya dikampus serta memantau kondisi infrastruktur di
                kampus. Selain itu, secara umum sebagai masyarakat dapat diwujudkan dengan
                peduli terhadap sesama seperti dengan turut membantu jika terjadi bencana
                alam, serta turut membantu meningkatkan lingkungan sekitar tempat tinggal
                maupun di lingkungan tempat bekerja baik dari sisi lingkungan alam maupun
                sosial terhadap individu dan kelompok lain.
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                <strong style={{ boxSizing: "border-box" }}>
                <em
                    style={{
                    boxSizing: "border-box",
                    margin: 0,
                    padding: 0,
                    border: 0,
                    fontVariant: "inherit",
                    fontWeight: "inherit",
                    fontStretch: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    fontFamily: "inherit",
                    fontOpticalSizing: "inherit",
                    fontKerning: "inherit",
                    fontFeatureSettings: "inherit",
                    fontVariationSettings: "inherit",
                    verticalAlign: "baseline"
                    }}
                >
                    3. Kemandirian
                </em>
                </strong>
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                Di dalam beberapa buku pembelajaran, dikatakan bahwa mandiri berarti dapat
                berdiri diatas kaki sendiri, artinya tidak banyak bergantung kepada orang
                lain dalam berbagai hal. Kemandirian dianggap sebagai suatu hal yang penting
                harus dimiliki oleh seorang pemimpin, karena tampa kemandirian seseorang
                tidak akan mampu memimpin orang lain.
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                <strong style={{ boxSizing: "border-box" }}>
                <em
                    style={{
                    boxSizing: "border-box",
                    margin: 0,
                    padding: 0,
                    border: 0,
                    fontVariant: "inherit",
                    fontWeight: "inherit",
                    fontStretch: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    fontFamily: "inherit",
                    fontOpticalSizing: "inherit",
                    fontKerning: "inherit",
                    fontFeatureSettings: "inherit",
                    fontVariationSettings: "inherit",
                    verticalAlign: "baseline"
                    }}
                >
                    4. Kedisiplinan
                </em>
                </strong>
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                Definisi dari kata disiplin ialah ketaatan atau kepatuhan kepada peraturan.
                Sebaliknya untuk mengatur kehidupan manusia memerlukan hidup yang disiplin.
                Manfaat dari disiplin ialah seseorang dapat mencpai tujuan dengan waktu yang
                lebih efisien. Kedisiplinan memiliki dampak yang sama dngan nilai-nilai
                antikorupsi lainnya yaitu dapat menumbuhkan kepercayaan dari orang lain
                dalam berbagai hal. Kedisiplinan dapat diwujudkan antara lain dalam bentuk
                kemampuan mengatur waktu dengan baik, kepatuhan kepada seluruh peraturan dan
                ketentuan yang berlaku, mengerjakan segala sesuatu dengan tepat waktu, dan
                fokus pada pekerjaan.
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                <strong style={{ boxSizing: "border-box" }}>
                <em
                    style={{
                    boxSizing: "border-box",
                    margin: 0,
                    padding: 0,
                    border: 0,
                    fontVariant: "inherit",
                    fontWeight: "inherit",
                    fontStretch: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    fontFamily: "inherit",
                    fontOpticalSizing: "inherit",
                    fontKerning: "inherit",
                    fontFeatureSettings: "inherit",
                    fontVariationSettings: "inherit",
                    verticalAlign: "baseline"
                    }}
                >
                    5. Tanggung Jawab
                </em>
                </strong>
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                Kata tanggung jawab adalah keadaan wajib menanggung segala sesuatunya (kalau
                terjadi apa-apa boleh dituntut, dipersalahkan dan diperkarakan). Seseorang
                yang memiliki tanggung jawab akan memiliki kecenderungan menyelesaikan tugas
                dengan lebih baik. Seseorang yang dapat menunaikan tanggung jawabnya sekecil
                apa-pun itu dengan baik akan mendapatkan kepercayaan dari orang lain.
                Penerapan nilai tanggung jawab antara lain dapat diwujudkan dalam bentuk
                belajar dengan sungguh-sungguh, lulus tepat waktu dengan nilai baik,
                mengerjakan tugas akademik dengan baik, menjaga amanah dan kepercayaan yang
                diberikan.
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                <strong style={{ boxSizing: "border-box" }}>
                <em
                    style={{
                    boxSizing: "border-box",
                    margin: 0,
                    padding: 0,
                    border: 0,
                    fontVariant: "inherit",
                    fontWeight: "inherit",
                    fontStretch: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    fontFamily: "inherit",
                    fontOpticalSizing: "inherit",
                    fontKerning: "inherit",
                    fontFeatureSettings: "inherit",
                    fontVariationSettings: "inherit",
                    verticalAlign: "baseline"
                    }}
                >
                    6. Kerja Keras
                </em>
                </strong>
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                Kerja keras didasari dengan adanya kemauan. Di dalam kemauan terkandung
                ketekadan, ketekunan, daya tahan, daya kerja, pendirian keberanian,
                ketabahan, keteguhan dan pantang mundur. Bekerja keras merupakan hal yang
                penting guna tercapainya hasil yang sesuai dengan target. Akan tetapi
                bekerja keras akan menjadi tidak berguna jika tanpa adanya pengetahuan.
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                <strong style={{ boxSizing: "border-box" }}>
                <em
                    style={{
                    boxSizing: "border-box",
                    margin: 0,
                    padding: 0,
                    border: 0,
                    fontVariant: "inherit",
                    fontWeight: "inherit",
                    fontStretch: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    fontFamily: "inherit",
                    fontOpticalSizing: "inherit",
                    fontKerning: "inherit",
                    fontFeatureSettings: "inherit",
                    fontVariationSettings: "inherit",
                    verticalAlign: "baseline"
                    }}
                >
                    7. Kesederhanaan
                </em>
                </strong>
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                Gaya hidup merupakan suatu hal yang sangat penting bagi interaksi dengan
                masyarakat disekitar. Dengan gaya hidup yang sederhana manusia dibiasakan
                untuk tidak hidup boros, tidak sesuai dengan kemampuannya. Dengan gaya hidup
                yang sederhana, seseorang juga dibina untuk memprioritaskan kebutuhan diatas
                keinginannya.
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                <strong style={{ boxSizing: "border-box" }}>
                <em
                    style={{
                    boxSizing: "border-box",
                    margin: 0,
                    padding: 0,
                    border: 0,
                    fontVariant: "inherit",
                    fontWeight: "inherit",
                    fontStretch: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    fontFamily: "inherit",
                    fontOpticalSizing: "inherit",
                    fontKerning: "inherit",
                    fontFeatureSettings: "inherit",
                    fontVariationSettings: "inherit",
                    verticalAlign: "baseline"
                    }}
                >
                    8. Keberanian
                </em>
                </strong>
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                Keberanian dapat diwujudkandalam bentuk berani mengatakan dan membela
                kebenaran, berani mengakui kesalahan, berani bertanggung jawab, dan
                sebagainya. Keberanian sangat diperlukan untuk mencapai kesuksesan dan
                keberanian akan semakin matang jika diiringi dengan keyakinan, serta
                keyakinan akan semakin kuat jika pengetahuannya juga kuat.
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                <strong style={{ boxSizing: "border-box" }}>
                <em
                    style={{
                    boxSizing: "border-box",
                    margin: 0,
                    padding: 0,
                    border: 0,
                    fontVariant: "inherit",
                    fontWeight: "inherit",
                    fontStretch: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    fontFamily: "inherit",
                    fontOpticalSizing: "inherit",
                    fontKerning: "inherit",
                    fontFeatureSettings: "inherit",
                    fontVariationSettings: "inherit",
                    verticalAlign: "baseline"
                    }}
                >
                    9. Keadilan
                </em>
                </strong>
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                Berdasarkan arti katanya, adil adalah sama berat, tidak berat sebelah dan
                tidak memihak. Keadilan dari sudut pandang bangsa Indonesia disebut juga
                keadilan sosial, secara jelas dicantumkan dalam pancasila sila ke-2 dan
                ke-5, serta UUD 1945. Keadilan adalah penilaian dengan memberikan kepada
                siapapun sesuai dengan apa yang menjadi haknya, yakni dengan bertindak
                proposional dan tidak melanggar hukum. Keadilan berkaitan erat dengan hak,
                dalam konsepsi bangsa Indonesia hak tidak dapat dipisahkan dengan kewajiban.
                Dalam konteks pembangunan bangsa Indonesia keadilan tidak bersifat sektoral
                tetapi meliputi ideologi. Untuk menciptakan masyarakat yang adil dan makmur.
                Adil dalam kemakmuran dan makmur dalam keadilan.
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                Sedangkan Kebijakan/Prinsip anti korupsi, yaitu :
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                <strong style={{ boxSizing: "border-box" }}>
                <em
                    style={{
                    boxSizing: "border-box",
                    margin: 0,
                    padding: 0,
                    border: 0,
                    fontVariant: "inherit",
                    fontWeight: "inherit",
                    fontStretch: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    fontFamily: "inherit",
                    fontOpticalSizing: "inherit",
                    fontKerning: "inherit",
                    fontFeatureSettings: "inherit",
                    fontVariationSettings: "inherit",
                    verticalAlign: "baseline"
                    }}
                >
                    1. Akuntabilitas
                </em>
                </strong>
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                Akuntabilitas adalah kesesuaian antara aturan dan pelaksanaan kerja. Semua
                lembaga mempertanggung jawabkan kinerjanya sesuai aturan main baik dalam
                bentuk konvensi (de facto) maupun konstitusi (de jure), baik pada level
                budaya (individu dengan individu) maupun pada level lembaga. Akuntabilitas
                publik secara tradisional dipahami sebagai alat yang digunakan untuk
                mengawasi dan mengarahkan perilaku administrasi dengan cara memberikan
                kewajiban untuk dapat memberikan jawaban kepada sejumlah otoritas eksternal
                .
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                Selain itu akuntabilitas publik dalam arti yang lebih fundamental merujuk
                kepada kemampuan seseorang terkait dengan kinerja yang diharapkan. Seseorang
                yang diberikan jawaban ini haruslah seseorang yang memiliki legitimasi untuk
                melakukan pengawasan dan mengharapkan kinerja . Akuntabilitas publik
                memiliki pola-pola tertentu dalam mekanismenya, antara lain adalah
                akuntabilitas program, akuntablitas proses, akuntailitas keuangan,
                akuntabilitas outcome, akuntabilitas hukum, dan akuntabilitas politik .
                Dalam pelaksanaannya, akuntabilitas harus dapat diukur dan
                dipertanggungjawabkan melalui mekanisme pelaporan dan pertanggungjawaban
                atas semua kegiatan yang dilakukan. Evaluasi atas kinerja administrasi,
                proses pelaksanaan, dampak dan manfaat yang diperoleh masyarakat baik secara
                langsung maupun manfaat jangka panjang dari sebuah kegiatan.
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                <strong style={{ boxSizing: "border-box" }}>
                <em
                    style={{
                    boxSizing: "border-box",
                    margin: 0,
                    padding: 0,
                    border: 0,
                    fontVariant: "inherit",
                    fontWeight: "inherit",
                    fontStretch: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    fontFamily: "inherit",
                    fontOpticalSizing: "inherit",
                    fontKerning: "inherit",
                    fontFeatureSettings: "inherit",
                    fontVariationSettings: "inherit",
                    verticalAlign: "baseline"
                    }}
                >
                    2. Transparansi
                </em>
                </strong>
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                Prinsip transparansi penting karena pemberantasan korupsi dimulai dari
                transparansi dan mengharuskan semua proses kebijakan dilakukan secara
                terbuka, sehingga segala bentuk penyimpangan dapat diketahui oleh publik.
                Transparansi menjadi pintu masuk sekaligus kontrol bagi seluruh proses
                dinamika struktural kelembagaan. Dalam bentuk yang paling sederhana,
                transparansi mengacu pada keterbukaan dan kejujuran untuk saling menjunjung
                tinggi kepercayaan karena kepercayaan, keterbukaan, dan kejujuran ini
                merupakan modal awal yang sangat berharga bagi semua orang untuk melanjutkan
                hidupnya di masa mendatang. Dalam prosesnya transparansi dibagi menjadi
                lima, yaitu :
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                – Proses penganggaran,
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                – Proses penyusunan kegiatan, <br style={{ boxSizing: "border-box" }} /> –
                Proses pembahasan, <br style={{ boxSizing: "border-box" }} /> – Proses
                pengawasan, dan <br style={{ boxSizing: "border-box" }} /> – Proses
                evaluasi.{" "}
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                <br style={{ boxSizing: "border-box" }} /> Proses penganggaran bersifat
                bottom up, mulai dari perencanaan, implementasi, laporan pertanggungjawaban
                dan penilaian (evaluasi) terhadap kinerja anggaran.
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                <br style={{ boxSizing: "border-box" }} /> Di dalam proses penyusunan
                kegiatan atau proyek pembangunan terkait dengan proses pembahasan tentang
                sumber-sumber pendanaan (anggaran pendapatan) dan alokasi anggaran (anggaran
                belanja). <br style={{ boxSizing: "border-box" }} /> Proses pembahasan
                membahas tentang pembutan rancangan peraturan yang berkaitan dengan strategi
                penggalangan (pemungutan dana), mekanisme pengelolaan proyek mulai dari
                pelaksanaan tender, pengerjaan teknis, pelaporan finansial dan
                pertanggungjawaban secara teknis. <br style={{ boxSizing: "border-box" }} />{" "}
                Proses pengawasan dalam pelksnaaan program dan proyek pembangunan berkaitan
                dengan kepentingan publik dan lebih khusus lagi adalah proyek-proyek yang
                diusulkan oleh masyarakat sendiri.{" "}
                <br style={{ boxSizing: "border-box" }} /> Proses evaluasi ini berlaku
                terhadap penyelenggaraan proyek dijalankan secara terbuka dan bukan hanya
                pertanggungjawaban secara administratif, tapi juga secara teknis dan fisik
                dari setiap output kerja-kerja pembangunan.
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                <strong style={{ boxSizing: "border-box" }}>
                <em
                    style={{
                    boxSizing: "border-box",
                    margin: 0,
                    padding: 0,
                    border: 0,
                    fontVariant: "inherit",
                    fontWeight: "inherit",
                    fontStretch: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    fontFamily: "inherit",
                    fontOpticalSizing: "inherit",
                    fontKerning: "inherit",
                    fontFeatureSettings: "inherit",
                    fontVariationSettings: "inherit",
                    verticalAlign: "baseline"
                    }}
                >
                    3. Kewajaran
                </em>
                </strong>
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                Prinsip fairness atau kewajaran ini ditunjukkan untuk mencegah terjadinya
                manipulasi (ketidakwajaran) dalam penganggaran, baik dalam bentuk mark up
                maupun ketidakwajaran dalam bentuk lainnya. Sifat-sifat prinsip
                ketidakwajaran ini terdiri dari lima hal penting komperehensif dan disiplin,
                fleksibilitas, terprediksi, kejujuran dan informatif. Komperehensif dan
                disiplin berarti mempertimbangkan keseluruhan aspek, berkesinambungan, taat
                asas, prinsip pembebanan, pengeluaran dan tidak melampaui batas (off
                budget). Fleksibilitas artinya adalah adanya kebijakan tertentu untuk
                mencapai efisiensi dan efektifitas. Terprediksi berarti adanya ketetapan
                dlam perencanaan atas dasar asas value for money untuk menghindari defisit
                dalam tahun anggaran berjalan. Anggaran yang terprediksi merupakan cerminan
                dari adanya prinsip fairness di dalam proses perencanaan pembangunan.
                Kejujuran mengandung arti tidak adanya bias perkiraan penerimaan maupun
                pengeluaran yang disengaja yang berasal dari pertimbangan teknis maupun
                politis. Kejujuran merupakan bagian pokok dari prinsip fairness. Penerapan
                sifat informatif agar dapat tercapainya sistem informasi pelaporan yang
                teratur dan informatif. Sistem informatif ini dijadikan sebagai dasar
                penilaian kinerja, kejujuran dan proses pengambilan keputusan selain itu
                sifat ini merupakan ciri khas dari kejujuran.
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                <strong style={{ boxSizing: "border-box" }}>
                <em
                    style={{
                    boxSizing: "border-box",
                    margin: 0,
                    padding: 0,
                    border: 0,
                    fontVariant: "inherit",
                    fontWeight: "inherit",
                    fontStretch: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    fontFamily: "inherit",
                    fontOpticalSizing: "inherit",
                    fontKerning: "inherit",
                    fontFeatureSettings: "inherit",
                    fontVariationSettings: "inherit",
                    verticalAlign: "baseline"
                    }}
                >
                    4. Kebijakan
                </em>
                </strong>
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                Kebijakan ini berperan untuk mengatur tata interaksi agar tidak terjadi
                penyimpangan yang dapat merugikan negara dan masyarakat. Kebijakan anti
                korupsi ini tidak selalu identik dengan undang-undang anti korupsi, namun
                bisa berupa undang-undang kebebasan mengakses informasi, undang-undang
                desentralisasi, undang-undang anti-monopoli, maupun lainnya yang dapat
                memudahkan masyarakat mengetahui sekaligus mengontrol terhadap kinerja dan
                penggunaan anggaran negara oleh para pejabat negara. Aspek-aspek kebijakan
                terdiri dari isi kebijakan, pembuat kebijakan, pelaksana kebijakan, kultur
                kebijakan. Kebijakan anti korupsi akan efektif apabila didalamnya terkandung
                unsur-unsur yang terkait dengan persoalan korupsi dan kualitas dari isi
                kebijakan tergantung pada kualitas dan integritas pembuatnya. Kebijakan yang
                telah dibuat dapat berfungsi apabila didukung oleh aktor-aktor penegak
                kebijakan yaitu kepolisian, kejaksaan, pengadilan, pengacara, dan lembaga
                pemasyarakatan. Eksistensi sebuah kebijakan tersebut terkait dengan
                nilai-nilai, pemahaman, sikap, persepsi dan kesadaran masyarakat terhadap
                hukum atau undang-undang anti korupsi. Lebih jauh lagi kultur kebijakan ini
                akan menentukan tingkat partisipasi masyarakat dalam pemberantasan korupsi.
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                <strong style={{ boxSizing: "border-box" }}>
                <em
                    style={{
                    boxSizing: "border-box",
                    margin: 0,
                    padding: 0,
                    border: 0,
                    fontVariant: "inherit",
                    fontWeight: "inherit",
                    fontStretch: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    fontFamily: "inherit",
                    fontOpticalSizing: "inherit",
                    fontKerning: "inherit",
                    fontFeatureSettings: "inherit",
                    fontVariationSettings: "inherit",
                    verticalAlign: "baseline"
                    }}
                >
                    5. Kontrol Kebijakan
                </em>
                </strong>
            </p>
            <p
                style={{
                boxSizing: "border-box",
                margin: "0px 0px 25px",
                padding: 0,
                border: 0,
                fontVariantNumeric: "inherit",
                fontVariantEastAsian: "inherit",
                fontVariantAlternates: "inherit",
                fontVariantPosition: "inherit",
                fontStretch: "inherit",
                fontSize: 15,
                lineHeight: "1.6",
                fontFamily: "Nobile, sans-serif",
                fontOpticalSizing: "inherit",
                fontKerning: "inherit",
                fontFeatureSettings: "inherit",
                fontVariationSettings: "inherit",
                verticalAlign: "baseline",
                color: "rgb(62, 62, 62)",
                backgroundColor: "rgb(255, 255, 255)",
                textAlign: "justify"
                }}
            >
                Kontrol kebijakan merupakan upaya agar kebijakan yang dibuat betul-betul
                efektif dan mengeliminasi semua bentuk korupsi. Bentuk kontrol kebijakan
                berupa partisipasi, evolusi dan reformasi. Kontrol kebijakan partisipasi
                yaitu melakukan kontrol terhadap kebijakan dengan ikut serta dalam
                penyusunan dan pelaksanaannya. Kontrol kebijakan evolusi yaitu dengan
                menawarkan alternatif kebijakan baru yang dianggap lebih layak. Kontrol
                kebijakan reformasi yaitu mengontrol dengan mengganti kebijakan yang
                dianggap tidak sesuai.
            </p>

        </section>
        </Box>

      </main>

      <Footer />


      <div id="preloader"></div>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

    </>
  )
}
