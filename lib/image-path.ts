// Função para adicionar o basePath nas imagens
export function getImagePath(src: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/futuro_do_atendimento' : ''
  return `${basePath}${src}`
}