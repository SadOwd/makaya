@echo off
chcp 65001 > nul
powershell -ExecutionPolicy Bypass -File "%~dp0FUSIONNER_JURIDIQUE_ET_RECHARGE.ps1"
