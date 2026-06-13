#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Gerador do Dossiê Mestre - Verbo Bruto
Estética Gospel Noir: fundo preto, texto branco, contraste extremo
Com imagens e logo integrados
"""

import os
import unicodedata
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm, mm
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, Flowable, KeepTogether, Image
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from PIL import Image as PILImage

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------
BASE_DIR = "/workspace/resuma-de-uma-forma"
ASSETS = os.path.join(BASE_DIR, "assets")

LOGO = os.path.join(ASSETS, "logo.png")
YT_PROFILE = os.path.join(ASSETS, "yt_profile.png")
BANNER = os.path.join(ASSETS, "banner.jpg")
THUMB_PESO = os.path.join(ASSETS, "thumb_peso_cruz.jpg")
THUMB_MONTE = os.path.join(ASSETS, "thumb_monte_siao.jpg")
THUMB_TORRE = os.path.join(ASSETS, "thumb_torre_forte.jpg")
THUMB_MATEUS = os.path.join(ASSETS, "thumb_mateus3.jpg")

# ---------------------------------------------------------------------------
# Fonts
# ---------------------------------------------------------------------------
VERA_DIR = "/home/verdent/.local/lib/python3.11/site-packages/reportlab/fonts/"
pdfmetrics.registerFont(TTFont("Vera", VERA_DIR + "Vera.ttf"))
pdfmetrics.registerFont(TTFont("VeraBd", VERA_DIR + "VeraBd.ttf"))
pdfmetrics.registerFont(TTFont("VeraIt", VERA_DIR + "VeraIt.ttf"))
pdfmetrics.registerFont(TTFont("VeraBI", VERA_DIR + "VeraBI.ttf"))
pdfmetrics.registerFontFamily("Vera", normal="Vera", bold="VeraBd",
                              italic="VeraIt", boldItalic="VeraBI")

# ---------------------------------------------------------------------------
# Colors
# ---------------------------------------------------------------------------
BG_BLACK = colors.HexColor("#0A0A0A")
BG_DARK = colors.HexColor("#111111")
BG_CARD = colors.HexColor("#1A1A1A")
WHITE = colors.HexColor("#F5F5F5")
GREY_LIGHT = colors.HexColor("#CCCCCC")
GREY_MID = colors.HexColor("#888888")
ACCENT = colors.HexColor("#D4AF37")
ACCENT_DIM = colors.HexColor("#8B7536")

W, H = A4

# ---------------------------------------------------------------------------
# Styles
# ---------------------------------------------------------------------------
style_title_cover = ParagraphStyle(
    "TitleCover", fontName="VeraBd", fontSize=36, leading=44,
    textColor=WHITE, alignment=TA_CENTER, spaceAfter=6*mm
)
style_section_title = ParagraphStyle(
    "SectionTitle", fontName="VeraBd", fontSize=20, leading=26,
    textColor=ACCENT, alignment=TA_LEFT, spaceBefore=10*mm, spaceAfter=6*mm
)
style_subsection = ParagraphStyle(
    "Subsection", fontName="VeraBd", fontSize=14, leading=19,
    textColor=WHITE, alignment=TA_LEFT, spaceBefore=7*mm, spaceAfter=4*mm
)
style_body = ParagraphStyle(
    "Body", fontName="Vera", fontSize=10, leading=15,
    textColor=GREY_LIGHT, alignment=TA_JUSTIFY, spaceAfter=3*mm
)
style_body_bold = ParagraphStyle(
    "BodyBold", fontName="VeraBd", fontSize=10, leading=15,
    textColor=WHITE, alignment=TA_LEFT, spaceAfter=2*mm
)
style_bullet = ParagraphStyle(
    "Bullet", fontName="Vera", fontSize=10, leading=15,
    textColor=GREY_LIGHT, alignment=TA_LEFT, spaceAfter=1.5*mm,
    leftIndent=12*mm, bulletIndent=5*mm
)
style_quote = ParagraphStyle(
    "Quote", fontName="VeraIt", fontSize=11, leading=16,
    textColor=ACCENT, alignment=TA_CENTER, spaceBefore=4*mm, spaceAfter=4*mm,
    leftIndent=15*mm, rightIndent=15*mm
)
style_highlight = ParagraphStyle(
    "Highlight", fontName="VeraBd", fontSize=11, leading=16,
    textColor=WHITE, alignment=TA_CENTER, spaceBefore=3*mm, spaceAfter=3*mm
)
style_caption = ParagraphStyle(
    "Caption", fontName="VeraIt", fontSize=8, leading=11,
    textColor=GREY_MID, alignment=TA_CENTER, spaceBefore=2*mm, spaceAfter=4*mm
)

# ---------------------------------------------------------------------------
# Custom Flowables
# ---------------------------------------------------------------------------

class HorizontalLine(Flowable):
    def __init__(self, width, color=ACCENT_DIM, thickness=0.5):
        Flowable.__init__(self)
        self.width = width
        self.color = color
        self.thickness = thickness
        self._fixedWidth = width
        self._fixedHeight = thickness + 4*mm

    def wrap(self, availWidth, availHeight):
        return (self.width, self.thickness + 4*mm)

    def draw(self):
        self.canv.setStrokeColor(self.color)
        self.canv.setLineWidth(self.thickness)
        self.canv.line(0, 2*mm, self.width, 2*mm)


class NumberBlock(Flowable):
    def __init__(self, number, text, width):
        Flowable.__init__(self)
        self.number = number
        self.text = text
        self.bw = width
        self._fixedWidth = width
        self._fixedHeight = 14*mm

    def wrap(self, availWidth, availHeight):
        return (self.bw, 14*mm)

    def draw(self):
        c = self.canv
        c.setFillColor(ACCENT)
        c.circle(8*mm, 5*mm, 4*mm, fill=1, stroke=0)
        c.setFillColor(BG_BLACK)
        c.setFont("VeraBd", 10)
        c.drawCentredString(8*mm, 3.5*mm, str(self.number))
        c.setFillColor(WHITE)
        c.setFont("Vera", 10)
        c.drawString(16*mm, 3.5*mm, self.text)


class CenteredImage(Flowable):
    """Image centered on the available width with optional border."""
    def __init__(self, img_path, img_width, img_height, border_color=None, border_width=1):
        Flowable.__init__(self)
        self.img_path = img_path
        self.img_width = img_width
        self.img_height = img_height
        self.border_color = border_color
        self.border_width = border_width

    def wrap(self, availWidth, availHeight):
        self.avail_width = availWidth
        return (availWidth, self.img_height + 2*mm)

    def draw(self):
        x = (self.avail_width - self.img_width) / 2
        y = 1*mm
        if self.border_color:
            self.canv.setStrokeColor(self.border_color)
            self.canv.setLineWidth(self.border_width)
            pad = 2
            self.canv.rect(x - pad, y - pad,
                          self.img_width + 2*pad, self.img_height + 2*pad,
                          fill=0, stroke=1)
        self.canv.drawImage(self.img_path, x, y,
                           self.img_width, self.img_height,
                           preserveAspectRatio=True, mask='auto')


class ImageGrid(Flowable):
    """2x2 grid of images with captions."""
    def __init__(self, images, captions, cell_w, cell_h, gap=4*mm):
        Flowable.__init__(self)
        self.images = images
        self.captions = captions
        self.cell_w = cell_w
        self.cell_h = cell_h
        self.gap = gap
        self.caption_h = 12
        cols = 2
        rows = (len(images) + 1) // 2
        self.total_w = cols * cell_w + (cols - 1) * gap
        self.total_h = rows * (cell_h + self.caption_h + 2*mm) + (rows - 1) * gap

    def wrap(self, availWidth, availHeight):
        self.avail_width = availWidth
        return (availWidth, self.total_h)

    def draw(self):
        c = self.canv
        offset_x = (self.avail_width - self.total_w) / 2
        cols = 2
        for i, (img_path, caption) in enumerate(zip(self.images, self.captions)):
            col = i % cols
            row = i // cols
            x = offset_x + col * (self.cell_w + self.gap)
            y = self.total_h - (row + 1) * (self.cell_h + self.caption_h + 2*mm) - row * self.gap + self.caption_h + 2*mm

            # Border
            c.setStrokeColor(ACCENT_DIM)
            c.setLineWidth(0.5)
            c.rect(x - 1, y - 1, self.cell_w + 2, self.cell_h + 2, fill=0, stroke=1)

            # Image
            if os.path.exists(img_path):
                c.drawImage(img_path, x, y, self.cell_w, self.cell_h,
                           preserveAspectRatio=True, mask='auto')

            # Caption
            c.setFillColor(GREY_MID)
            c.setFont("VeraIt", 7)
            c.drawCentredString(x + self.cell_w / 2, y - self.caption_h, caption)


# ---------------------------------------------------------------------------
# Page template callbacks
# ---------------------------------------------------------------------------
def on_page(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(BG_BLACK)
    canvas.rect(0, 0, W, H, fill=1, stroke=0)

    canvas.setStrokeColor(ACCENT_DIM)
    canvas.setLineWidth(0.3)
    canvas.line(2*cm, H - 1.2*cm, W - 2*cm, H - 1.2*cm)

    canvas.setFillColor(GREY_MID)
    canvas.setFont("Vera", 7)
    canvas.drawString(2*cm, H - 1.0*cm, "VERBO BRUTO")
    canvas.drawRightString(W - 2*cm, H - 1.0*cm, u"DOSSI\u00ca MESTRE")

    if doc.page > 1:
        canvas.setFillColor(GREY_MID)
        canvas.setFont("Vera", 8)
        canvas.drawCentredString(W/2, 1.2*cm, str(doc.page))

    canvas.setStrokeColor(ACCENT_DIM)
    canvas.setLineWidth(0.3)
    canvas.line(2*cm, 1.8*cm, W - 2*cm, 1.8*cm)
    canvas.restoreState()


def on_first_page(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(BG_BLACK)
    canvas.rect(0, 0, W, H, fill=1, stroke=0)

    # Bottom gold bar
    canvas.setFillColor(ACCENT)
    canvas.rect(2*cm, 2*cm, W - 4*cm, 1.5, fill=1, stroke=0)

    canvas.setFillColor(GREY_MID)
    canvas.setFont("Vera", 8)
    canvas.drawCentredString(W/2, 1.2*cm,
                             u"DOCUMENTO CONFIDENCIAL  \u2022  VERS\u00c3O ATUALIZADA")
    canvas.restoreState()


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------
def sanitize(text):
    text = unicodedata.normalize("NFC", text)
    text = text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    return text

def bullet_p(text):
    return Paragraph(sanitize(text), style_bullet)

def body_p(text):
    return Paragraph(sanitize(text), style_body)

def bold_p(text):
    return Paragraph(sanitize(text), style_body_bold)

def section_p(text):
    return Paragraph(sanitize(text).upper(), style_section_title)

def subsec_p(text):
    return Paragraph(sanitize(text), style_subsection)

def quote_p(text):
    return Paragraph(sanitize(text), style_quote)

def hl(text):
    return Paragraph(sanitize(text), style_highlight)

def caption_p(text):
    return Paragraph(sanitize(text), style_caption)

def sep():
    return HorizontalLine(W - 5*cm)

def spc(n=6):
    return Spacer(1, n*mm)


# ---------------------------------------------------------------------------
# Build
# ---------------------------------------------------------------------------
def build_pdf():
    output_path = os.path.join(BASE_DIR, "Dossie_Mestre_Verbo_Bruto.pdf")

    doc = SimpleDocTemplate(
        output_path, pagesize=A4,
        topMargin=2*cm, bottomMargin=2.5*cm,
        leftMargin=2.5*cm, rightMargin=2.5*cm,
    )

    uw = W - 5*cm  # usable width
    story = []

    # ==================================================================
    # CAPA - com logo
    # ==================================================================
    story.append(Spacer(1, 2.5*cm))

    # Logo centralizado
    logo_size = 5*cm
    story.append(CenteredImage(LOGO, logo_size, logo_size, border_color=ACCENT, border_width=1.5))
    story.append(Spacer(1, 1.5*cm))

    story.append(Paragraph("VERBO BRUTO", style_title_cover))
    story.append(spc(4))
    story.append(HorizontalLine(8*cm, ACCENT, 1.0))
    story.append(spc(6))

    cover_desc = ParagraphStyle(
        "CoverDesc", fontName="Vera", fontSize=11, leading=16,
        textColor=GREY_LIGHT, alignment=TA_CENTER, spaceAfter=2*mm
    )
    story.append(Paragraph(sanitize(u"DOSSI\u00ca MESTRE"), cover_desc))
    story.append(Spacer(1, 1.5*cm))
    story.append(quote_p(u"A Palavra n\u00e3o \u00e9 apresentada como produto."))
    story.append(quote_p(u"Ela \u00e9 anunciada como verdade."))
    story.append(Spacer(1, 2*cm))

    ver_style = ParagraphStyle(
        "Version", fontName="Vera", fontSize=9, leading=13,
        textColor=GREY_MID, alignment=TA_CENTER
    )
    story.append(Paragraph(sanitize(u"Vers\u00e3o Atualizada"), ver_style))
    story.append(PageBreak())

    # ==================================================================
    # SUMARIO
    # ==================================================================
    story.append(spc(10))
    story.append(Paragraph(u"SUM\u00c1RIO", style_section_title))
    story.append(sep())
    story.append(spc())

    toc = [
        ("01", u"O QUE \u00c9 O VERBO BRUTO"),
        ("02", u"A NOVA DESCOBERTA ESTRAT\u00c9GICA"),
        ("03", u"O PERSONAGEM"),
        ("04", u"A MOTO"),
        ("05", u"GOSPEL NOIR"),
        ("06", u"NOVA ESTRUTURA DE CONTE\u00daDO"),
        ("07", u"POSICIONAMENTO NAS REDES"),
        ("08", u"NOVA REGRA DE PRODU\u00c7\u00c3O"),
        ("09", u"NOVO MODELO DE V\u00cdDEO"),
        ("10", u"CONTEMPLAI O CORDEIRO"),
        ("11", u"PRINC\u00cdPIO FINAL"),
    ]

    for num, title in toc:
        toc_style = ParagraphStyle(
            f"TOC_{num}", fontName="Vera", fontSize=10, leading=22,
            textColor=GREY_LIGHT, alignment=TA_LEFT, leftIndent=5*mm
        )
        toc_text = (
            f'<font name="VeraBd" color="#D4AF37">{num}</font>'
            f'&nbsp;&nbsp;&nbsp;&nbsp;{sanitize(title)}'
        )
        story.append(Paragraph(toc_text, toc_style))

    story.append(PageBreak())

    # ==================================================================
    # 01 - O QUE E O VERBO BRUTO
    # ==================================================================
    story.append(spc(5))
    story.append(section_p(u"01  |  O que \u00e9 o Verbo Bruto"))
    story.append(sep())
    story.append(spc())

    story.append(body_p(
        u"O Verbo Bruto n\u00e3o nasceu para disputar aten\u00e7\u00e3o. "
        u"Nasceu para interromper."
    ))
    story.append(body_p(
        u"Enquanto grande parte do conte\u00fado crist\u00e3o busca entretenimento, "
        u"consumo r\u00e1pido ou mensagens suavizadas, o Verbo Bruto foi "
        u"constru\u00eddo para proclamar."
    ))
    story.append(spc())
    story.append(bold_p(u"Sua proposta permanece a mesma:"))
    story.append(quote_p(
        u"A Palavra n\u00e3o \u00e9 apresentada como produto. "
        u"Ela \u00e9 anunciada como verdade."
    ))
    story.append(spc())
    story.append(bold_p(u"Por isso o Verbo Bruto N\u00c3O \u00e9:"))
    story.append(bullet_p(u"\u2022  Autoajuda crist\u00e3"))
    story.append(bullet_p(u"\u2022  Coaching espiritual"))
    story.append(bullet_p(u"\u2022  Conte\u00fado motivacional"))
    story.append(bullet_p(u"\u2022  Entretenimento gospel"))
    story.append(spc())
    story.append(hl(
        u"\u00c9 uma experi\u00eancia de proclama\u00e7\u00e3o, "
        u"contempla\u00e7\u00e3o e confronto."
    ))
    story.append(spc())
    story.append(body_p(
        u"Mas os dados mostraram algo importante: as pessoas n\u00e3o permanecem "
        u"apenas por causa da est\u00e9tica. Elas permanecem porque encontram "
        u"verdade, esperan\u00e7a e identifica\u00e7\u00e3o."
    ))
    story.append(body_p(
        u"Por isso o Verbo Bruto n\u00e3o comunica apenas peso. "
        u"Comunica peso com prop\u00f3sito."
    ))
    story.append(PageBreak())

    # ==================================================================
    # 02 - A NOVA DESCOBERTA ESTRATEGICA
    # ==================================================================
    story.append(spc(5))
    story.append(section_p(u"02  |  A nova descoberta estrat\u00e9gica"))
    story.append(sep())
    story.append(spc())

    story.append(body_p(
        u"A an\u00e1lise das plataformas revelou uma ordem clara:"
    ))
    story.append(spc())

    flow_steps = [
        u"As pessoas chegam pela Palavra.",
        u"Param pela dor humana.",
        u"Permanecem pela esperan\u00e7a.",
        u"Reconhecem o Verbo Bruto pela est\u00e9tica."
    ]
    for i, step in enumerate(flow_steps, 1):
        story.append(NumberBlock(i, step, uw))

    story.append(spc())
    story.append(hl(
        u"Essa ordem passa a orientar toda a produ\u00e7\u00e3o de conte\u00fado."
    ))
    story.append(PageBreak())

    # ==================================================================
    # 03 - O PERSONAGEM
    # ==================================================================
    story.append(spc(5))
    story.append(section_p(u"03  |  O Personagem"))
    story.append(sep())
    story.append(spc())

    # Profile image of O Mensageiro
    profile_size = 4*cm
    story.append(CenteredImage(YT_PROFILE, profile_size, profile_size,
                               border_color=ACCENT_DIM, border_width=0.8))
    story.append(caption_p(u"O Mensageiro \u2014 o rosto do Verbo Bruto"))
    story.append(spc())

    story.append(body_p(
        u"O Mensageiro continua sendo o rosto do projeto. "
        u"Mas agora ele n\u00e3o aparece apenas como s\u00edmbolo visual. "
        u"Ele aparece como testemunha da jornada."
    ))
    story.append(spc())
    story.append(bold_p(
        u"N\u00e3o \u00e9 her\u00f3i. N\u00e3o \u00e9 celebridade. "
        u"N\u00e3o \u00e9 influenciador."
    ))
    story.append(spc())
    story.append(body_p(u"\u00c9 algu\u00e9m que atravessou:"))
    story.append(bullet_p(u"\u2022  Desertos"))
    story.append(bullet_p(u"\u2022  Perdas"))
    story.append(bullet_p(u"\u2022  Sil\u00eancio"))
    story.append(bullet_p(u"\u2022  Tempestades"))
    story.append(spc())
    story.append(hl(u"E continua caminhando."))
    story.append(spc())
    story.append(body_p(
        u"A audi\u00eancia n\u00e3o deve apenas olhar para ele. "
        u"Deve caminhar com ele."
    ))
    story.append(PageBreak())

    # ==================================================================
    # 04 - A MOTO
    # ==================================================================
    story.append(spc(5))
    story.append(section_p(u"04  |  A Moto"))
    story.append(sep())
    story.append(spc())

    story.append(body_p(
        u"A moto permanece como s\u00edmbolo do caminho. "
        u"Mas sua fun\u00e7\u00e3o narrativa foi fortalecida."
    ))
    story.append(spc())
    story.append(bold_p(u"Ela representa:"))
    story.append(bullet_p(u"\u2022  Jornada"))
    story.append(bullet_p(u"\u2022  Perman\u00eancia"))
    story.append(bullet_p(u"\u2022  Travessia"))
    story.append(bullet_p(u"\u2022  Perseveran\u00e7a"))
    story.append(bullet_p(u"\u2022  Dire\u00e7\u00e3o"))
    story.append(spc())
    story.append(hl(
        u"Ela n\u00e3o \u00e9 exibida. Ela acompanha a hist\u00f3ria."
    ))
    story.append(PageBreak())

    # ==================================================================
    # 05 - GOSPEL NOIR  (com galeria de imagens)
    # ==================================================================
    story.append(spc(5))
    story.append(section_p(u"05  |  Gospel Noir"))
    story.append(sep())
    story.append(spc())

    story.append(bold_p(u"A est\u00e9tica permanece inalterada."))
    story.append(spc())

    noir_elements = [
        u"Preto e branco dominante",
        u"Contraste extremo",
        u"Gr\u00e3o pesado",
        u"Poeira",
        u"Tempestade",
        u"Estrada",
        u"Cruz",
        u"Luz distante",
    ]

    card_data = []
    for elem in noir_elements:
        card_data.append([Paragraph(
            f'<font color="#D4AF37">+</font>&nbsp;&nbsp;{sanitize(elem)}',
            ParagraphStyle("CardItem", fontName="Vera", fontSize=10,
                         leading=16, textColor=GREY_LIGHT)
        )])

    card_table = Table(card_data, colWidths=[uw - 2*cm])
    card_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), BG_CARD),
        ("LEFTPADDING", (0, 0), (-1, -1), 15),
        ("RIGHTPADDING", (0, 0), (-1, -1), 15),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
        ("LINEABOVE", (0, 0), (-1, 0), 1, ACCENT_DIM),
        ("LINEBELOW", (0, -1), (-1, -1), 1, ACCENT_DIM),
    ]))
    story.append(card_table)

    story.append(spc())
    story.append(bold_p(u"Mas existe uma nova regra:"))
    story.append(spc())
    story.append(quote_p(
        u"A est\u00e9tica nunca deve vir antes da mensagem."
    ))
    story.append(hl(
        u"A est\u00e9tica amplifica a verdade. N\u00e3o substitui a verdade."
    ))
    story.append(PageBreak())

    # --- Gospel Noir Visual Gallery ---
    story.append(spc(5))
    story.append(subsec_p(u"Refer\u00eancias Visuais \u2014 Gospel Noir"))
    story.append(sep())
    story.append(spc())

    # Image grid: 2x2 thumbnails
    grid_images = [THUMB_PESO, THUMB_TORRE, THUMB_MONTE, THUMB_MATEUS]
    grid_captions = [
        u"O Peso da Cruz | Mateus 27",
        u"Torre Forte | Salmo 18:2",
        u"Monte Si\u00e3o | Salmo 125",
        u"Mateus Cap\u00edtulo 3",
    ]

    cell_w = (uw - 8*mm) / 2
    cell_h = cell_w * 9 / 16  # 16:9 aspect ratio

    story.append(ImageGrid(grid_images, grid_captions, cell_w, cell_h, gap=6*mm))
    story.append(spc())
    story.append(caption_p(
        u"Exemplos da est\u00e9tica Gospel Noir aplicada nos v\u00eddeos do Verbo Bruto"
    ))

    # Banner
    story.append(spc(8))
    story.append(subsec_p(u"Banner do Canal"))
    story.append(spc(3))
    banner_w = uw
    banner_h = banner_w * 188 / 1138  # preserve aspect ratio
    story.append(CenteredImage(BANNER, banner_w, banner_h,
                               border_color=ACCENT_DIM, border_width=0.5))
    story.append(caption_p(u"Banner do canal YouTube \u2014 @verbobruto"))

    story.append(PageBreak())

    # ==================================================================
    # 06 - NOVA ESTRUTURA DE CONTEUDO
    # ==================================================================
    story.append(spc(5))
    story.append(section_p(u"06  |  Nova estrutura de conte\u00fado"))
    story.append(sep())
    story.append(spc())

    story.append(body_p(
        u"Todo conte\u00fado passa a obedecer uma sequ\u00eancia:"
    ))
    story.append(spc())

    struct_steps = [
        ("1", "Hook"),
        ("2", "Dor ou conflito humano"),
        ("3", "Palavra"),
        ("4", u"Esperan\u00e7a"),
        ("5", "CTA (Call to Action)"),
    ]
    for num, text in struct_steps:
        story.append(NumberBlock(int(num), text, uw))

    story.append(spc())
    story.append(bold_p(u"Exemplo:"))
    story.append(spc())

    ex_style = ParagraphStyle(
        "ExampleFlow", fontName="VeraIt", fontSize=10, leading=15,
        textColor=ACCENT, alignment=TA_CENTER, spaceAfter=2*mm
    )
    arrow_style = ParagraphStyle(
        "Arrow", fontName="VeraBd", fontSize=14, leading=16,
        textColor=GREY_MID, alignment=TA_CENTER, spaceAfter=1*mm
    )

    story.append(Paragraph(sanitize(u'"Eu corri tanto tempo..."'), ex_style))
    story.append(Paragraph("|", arrow_style))
    story.append(Paragraph("Mateus 11:28", ex_style))
    story.append(Paragraph("|", arrow_style))
    story.append(Paragraph("Descanso em Cristo", ex_style))
    story.append(Paragraph("|", arrow_style))
    story.append(Paragraph(
        sanitize(u'"Hoje eu preciso ouvir Deus sobre ______."'), ex_style
    ))
    story.append(spc())
    story.append(hl(
        u"Essa estrutura foi validada pelas m\u00e9tricas."
    ))
    story.append(PageBreak())

    # ==================================================================
    # 07 - POSICIONAMENTO NAS REDES
    # ==================================================================
    story.append(spc(5))
    story.append(section_p(u"07  |  Posicionamento nas redes"))
    story.append(sep())
    story.append(spc())

    # TikTok
    story.append(subsec_p("TIKTOK"))
    story.append(bold_p("Objetivo: Descoberta"))
    story.append(spc())
    for item in ["15 a 30 segundos", "Impacto imediato", "Frases diretas",
                 "Curiosidade", "Confronto"]:
        story.append(bullet_p(u"\u2022  " + item))
    story.append(spc())
    story.append(hl(
        u"O TikTok n\u00e3o recebe explica\u00e7\u00f5es longas. "
        u"Recebe verdades curtas."
    ))
    story.append(sep())

    # Instagram
    story.append(subsec_p("INSTAGRAM"))
    story.append(bold_p(u"Objetivo: Conex\u00e3o"))
    story.append(spc())
    for item in [u"Reels curtos e longos", u"Testemunho",
                 u"Palavra expl\u00edcita",
                 u"Identifica\u00e7\u00e3o emocional", u"Perguntas abertas"]:
        story.append(bullet_p(u"\u2022  " + item))
    story.append(spc())
    story.append(body_p(
        u"Os dados mostraram que o Instagram aceita conte\u00fados mais "
        u"profundos quando existe verdade b\u00edblica e testemunho."
    ))
    story.append(sep())

    # YouTube Shorts
    story.append(subsec_p("YOUTUBE SHORTS"))
    story.append(bold_p(u"Objetivo: Atrair para o universo"))
    story.append(spc())
    story.append(body_p(
        u"Funciona como trailer. N\u00e3o entrega tudo. "
        u"Convida para continuar."
    ))
    story.append(sep())

    # YouTube Principal
    story.append(subsec_p("YOUTUBE PRINCIPAL"))
    story.append(bold_p(u"Objetivo: Profundidade"))
    story.append(spc())
    story.append(hl(u"\u00c9 a casa do projeto."))
    story.append(spc())
    story.append(body_p(u"Ali ficam:"))
    for item in [u"M\u00fasicas completas", u"Visualizers",
                 u"Leituras b\u00edblicas", u"Palavra + M\u00fasica",
                 u"S\u00e9ries narrativas"]:
        story.append(bullet_p(u"\u2022  " + item))
    story.append(PageBreak())

    # ==================================================================
    # 08 - NOVA REGRA DE PRODUCAO
    # ==================================================================
    story.append(spc(5))
    story.append(section_p(u"08  |  Nova regra de produ\u00e7\u00e3o"))
    story.append(sep())
    story.append(spc())

    story.append(body_p(u"Cada campanha passa a seguir:"))
    story.append(spc())
    story.append(hl(u"1 tema por vez."))
    story.append(body_p(
        u"N\u00e3o m\u00faltiplas mensagens simult\u00e2neas."
    ))
    story.append(spc())

    story.append(bold_p(u"Exemplo:"))
    story.append(body_p(
        u'Semana da m\u00fasica: "Eu N\u00e3o Quero Sair Daqui"'
    ))
    story.append(spc())
    story.append(body_p(
        u"Todos os conte\u00fados da semana orbitam essa verdade. "
        u"Mudam apenas os \u00e2ngulos:"
    ))
    for item in [u"Descanso", u"Perman\u00eancia", u"Intimidade",
                 u"Entrega", u"Transforma\u00e7\u00e3o"]:
        story.append(bullet_p(u"\u2022  " + item))
    story.append(spc())
    story.append(hl(u"Mas a mensagem central permanece a mesma."))
    story.append(PageBreak())

    # ==================================================================
    # 09 - NOVO MODELO DE VIDEO
    # ==================================================================
    story.append(spc(5))
    story.append(section_p(u"09  |  Novo modelo de v\u00eddeo"))
    story.append(sep())
    story.append(spc())

    story.append(bold_p(u"Foi definido um padr\u00e3o \u00fanico."))
    story.append(spc())
    story.append(subsec_p("Estrutura"))

    video_steps = [
        (1, u"Trov\u00e3o"),
        (2, u"Frase de impacto"),
        (3, u"Logo Verbo Bruto"),
        (4, u"Filme principal"),
        (5, u"Encerramento"),
    ]
    for num, text in video_steps:
        story.append(NumberBlock(num, text, uw))

    story.append(spc())
    story.append(subsec_p(u"Produ\u00e7\u00e3o"))
    story.append(bold_p(
        u"Um \u00fanico v\u00eddeo mestre. Formato: 9:16"
    ))
    story.append(spc())
    story.append(body_p(
        u"Esse mesmo v\u00eddeo \u00e9 utilizado para:"
    ))

    plat_data = [
        [Paragraph(u'<font name="VeraBd" color="#D4AF37">PLATAFORMA</font>',
                   style_body),
         Paragraph(u'<font name="VeraBd" color="#D4AF37">ADAPTA\u00c7\u00c3O</font>',
                   style_body)],
        [Paragraph("TikTok", style_body),
         Paragraph(u"Hook espec\u00edfico", style_body)],
        [Paragraph("Instagram", style_body),
         Paragraph(u"Descri\u00e7\u00e3o adaptada", style_body)],
        [Paragraph("YouTube Shorts", style_body),
         Paragraph("CTA diferenciado", style_body)],
        [Paragraph("Facebook", style_body),
         Paragraph("Copy ajustada", style_body)],
    ]

    plat_table = Table(plat_data, colWidths=[uw*0.4, uw*0.6])
    plat_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), BG_CARD),
        ("BACKGROUND", (0, 1), (-1, -1), colors.HexColor("#141414")),
        ("TEXTCOLOR", (0, 0), (-1, -1), GREY_LIGHT),
        ("LINEBELOW", (0, 0), (-1, 0), 1, ACCENT_DIM),
        ("LINEBELOW", (0, -1), (-1, -1), 0.5, ACCENT_DIM),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1),
         [colors.HexColor("#141414"), colors.HexColor("#181818")]),
    ]))
    story.append(plat_table)

    story.append(spc())
    story.append(hl(u"A narrativa principal permanece a mesma."))
    story.append(PageBreak())

    # ==================================================================
    # 10 - CONTEMPLAI O CORDEIRO
    # ==================================================================
    story.append(spc(5))
    story.append(section_p(u"10  |  Contemplai o Cordeiro"))
    story.append(sep())
    story.append(spc())

    story.append(body_p(
        u"O \u00e1lbum deixa de ser tratado apenas como lan\u00e7amento musical. "
        u"Passa a ser tratado como jornada narrativa."
    ))
    story.append(spc())
    story.append(hl(
        u"Cada m\u00fasica gera uma semana de conte\u00fados."
    ))
    story.append(spc())

    story.append(bold_p(
        u'Exemplo: "Eu N\u00e3o Quero Sair Daqui"'
    ))
    story.append(spc())

    week_data = [
        [Paragraph(u'<font name="VeraBd" color="#D4AF37">DIA</font>', style_body),
         Paragraph(u'<font name="VeraBd" color="#D4AF37">TEMA</font>', style_body),
         Paragraph(u'<font name="VeraBd" color="#D4AF37">ABORDAGEM</font>', style_body)],
        [Paragraph("Dia 1", style_body),
         Paragraph("Descanso", style_body),
         Paragraph("A necessidade de parar", style_body)],
        [Paragraph("Dia 2", style_body),
         Paragraph(u"Perman\u00eancia", style_body),
         Paragraph(u"Ficar na presen\u00e7a", style_body)],
        [Paragraph("Dia 3", style_body),
         Paragraph("Intimidade", style_body),
         Paragraph("Relacionamento pessoal", style_body)],
        [Paragraph("Dia 4", style_body),
         Paragraph("Entrega", style_body),
         Paragraph("Rendimento total", style_body)],
        [Paragraph("Dia 5", style_body),
         Paragraph(u"Transforma\u00e7\u00e3o", style_body),
         Paragraph(u"O que muda em n\u00f3s", style_body)],
        [Paragraph("Dia 6", style_body),
         Paragraph(u"Trecho da m\u00fasica", style_body),
         Paragraph(u"Revela\u00e7\u00e3o parcial", style_body)],
        [Paragraph("Dia 7", style_body),
         Paragraph("Encerramento", style_body),
         Paragraph(u"Transi\u00e7\u00e3o para pr\u00f3xima faixa", style_body)],
    ]

    week_table = Table(week_data,
                       colWidths=[uw*0.15, uw*0.30, uw*0.55])
    week_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), BG_CARD),
        ("LINEBELOW", (0, 0), (-1, 0), 1, ACCENT),
        ("LINEBELOW", (0, -1), (-1, -1), 0.5, ACCENT_DIM),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1),
         [colors.HexColor("#141414"), colors.HexColor("#181818")]),
    ]))
    story.append(week_table)

    story.append(spc())
    story.append(hl(
        u"A m\u00fasica deixa de ser postagem. Passa a ser universo."
    ))
    story.append(PageBreak())

    # ==================================================================
    # 11 - PRINCIPIO FINAL
    # ==================================================================
    story.append(spc(5))
    story.append(section_p(u"11  |  Princ\u00edpio Final"))
    story.append(sep())
    story.append(spc())

    story.append(body_p(
        u"O Verbo Bruto continua sendo um projeto de proclama\u00e7\u00e3o "
        u"crist\u00e3 cinematogr\u00e1fica."
    ))
    story.append(spc())
    story.append(body_p(
        u"Mas agora existe uma compreens\u00e3o mais precisa do caminho:"
    ))
    story.append(spc())

    principles = [
        u"A Palavra vem primeiro.",
        u"A esperan\u00e7a sustenta.",
        u"A est\u00e9tica amplifica.",
        u"E a jornada conecta tudo.",
    ]

    princ_data = []
    for p in principles:
        princ_data.append([Paragraph(
            f'<font name="VeraBd" color="#D4AF37">|</font>&nbsp;&nbsp;&nbsp;'
            f'<font name="VeraBd" color="#F5F5F5">{sanitize(p)}</font>',
            ParagraphStyle("PrincItem", fontName="Vera", fontSize=12,
                         leading=20, textColor=WHITE, leftIndent=5*mm)
        )])

    princ_table = Table(princ_data, colWidths=[uw])
    princ_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), BG_CARD),
        ("LEFTPADDING", (0, 0), (-1, -1), 20),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LINEABOVE", (0, 0), (-1, 0), 2, ACCENT),
        ("LINEBELOW", (0, -1), (-1, -1), 2, ACCENT),
        ("LINEBEFORE", (0, 0), (0, -1), 3, ACCENT),
    ]))
    story.append(princ_table)

    story.append(spc())
    story.append(spc())
    story.append(quote_p(u"O Verbo n\u00e3o explica. Ele decreta."))
    story.append(spc())
    story.append(body_p(
        u"Mas agora cada decreto precisa conduzir o p\u00fablico "
        u"para uma verdade que possa ser vivida."
    ))

    # Closing with logo
    story.append(Spacer(1, 1.5*cm))
    story.append(HorizontalLine(uw, ACCENT, 1.5))
    story.append(spc(5))

    # Small logo at the end
    logo_end = 2.5*cm
    story.append(CenteredImage(LOGO, logo_end, logo_end))
    story.append(spc(3))

    closing = ParagraphStyle(
        "Closing", fontName="VeraBd", fontSize=14, leading=20,
        textColor=ACCENT, alignment=TA_CENTER
    )
    story.append(Paragraph("VERBO BRUTO", closing))
    story.append(spc(2))
    closing_sub = ParagraphStyle(
        "ClosingSub", fontName="Vera", fontSize=9, leading=13,
        textColor=GREY_MID, alignment=TA_CENTER
    )
    story.append(Paragraph(
        sanitize(u"Proclama\u00e7\u00e3o. Contempla\u00e7\u00e3o. Confronto."),
        closing_sub
    ))

    # Build
    doc.build(story, onFirstPage=on_first_page, onLaterPages=on_page)
    print(f"PDF gerado com sucesso: {output_path}")
    return output_path


if __name__ == "__main__":
    build_pdf()
