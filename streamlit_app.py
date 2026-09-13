"""
streamlit_app.py — Hébergement du site vitrine via Streamlit.

Le site statique (index.html, style.css, script.js) est assemblé en une seule page HTML
dans laquelle le CSS, le JavaScript et les images locales sont intégrés (inline / base64),
puis rendu dans un composant Streamlit.

Lancer en local :  streamlit run streamlit_app.py
"""

import base64
from typing import Optional
import mimetypes
import re
from pathlib import Path

import streamlit as st
import streamlit.components.v1 as components

ROOT = Path(__file__).parent


def _read(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def _data_uri(rel_path: str) -> Optional[str]:
    """Retourne l'image encodée en base64 si elle existe, sinon None."""
    file = ROOT / rel_path
    if not file.is_file():
        return None
    mime = mimetypes.guess_type(file.name)[0] or "application/octet-stream"
    data = base64.b64encode(file.read_bytes()).decode("ascii")
    return f"data:{mime};base64,{data}"


@st.cache_data(show_spinner=False)
def build_page() -> str:
    html = _read(ROOT / "index.html")
    css = _read(ROOT / "style.css")
    js = _read(ROOT / "script.js")

    # CSS et JS intégrés dans la page
    html = html.replace('<link rel="stylesheet" href="style.css">', f"<style>\n{css}\n</style>")
    html = html.replace('<script src="script.js"></script>', f"<script>\n{js}\n</script>")

    # Images locales -> base64 (les images absentes gardent leur src : le script affiche un cadre gris)
    def _inline(match: re.Match) -> str:
        src = match.group(1)
        uri = _data_uri(src)
        return f'src="{uri}"' if uri else match.group(0)

    html = re.sub(r'src="((?:images|cv)/[^"]+)"', _inline, html)
    return html


st.set_page_config(
    page_title="Fabrice TSAMO – Ingénieur procédés",
    page_icon="⚗️",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# Suppression des marges Streamlit pour un rendu plein écran
st.markdown(
    """
    <style>
      #MainMenu, footer, header {visibility: hidden;}
      .block-container {padding: 0 !important; max-width: 100% !important;}
      iframe {border: 0;}
    </style>
    """,
    unsafe_allow_html=True,
)

components.html(build_page(), height=6000, scrolling=True)
