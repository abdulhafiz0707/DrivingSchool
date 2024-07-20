import React from 'react'

// Images 
import "./About.scss"

function Abuot() {
  return (
		<div className='Abuot'>
			<div className='About-content'>
				<h1>О нас</h1>
				<div>
					<p>
						Автошкола ДРАЙВИНГСКУЛ создана командой профессионалов. За 10 лет
						работы мы выпустили более 9000 водителей категории «А» и «В». В
						ДРАЙВИНГСКУЛ четыре учебных класса расположенных в шаговой
						доступности от остановок, которые оборудованы современной
						материально- технической базой. У нас большой штат инструкторов и
						разнообразный автопарк, который дает возможность выбора автомобиля
						для обучения по душе.
					</p>
				</div>
			</div>

			<div className='About-content'>
				<h1>Офис</h1>
				<div className='text-with-line'>
					<span className='line'></span>
					<p>
						На сегодняшний день ДРАЙВИНГСКУЛ - это 4 учебных класса,
						расположенных в разных частях города вблизи от остановок
						общественного транспорта. Мы находимся по адресам: Спортивная;
						Эгершельд, Центр, Столетие. Наши администраторы вежливы, быстры и
						очень точны. Мы помним обо всех учениках и отслеживаем процесс
						обучения до самого получения водительского удостоверения. Возник
						вопрос? Позвони в наш офис, администратор найдет способ решения!
					</p>
				</div>
			</div>

			<div className='About-content'>
				<h1>Автопарк</h1>
				<div className='text-with-line'>
          <span className="line"></span>
					<p>
						Практическая часть проходит на специально оборудованных автомобилях
						и включает несколько этапов обучения: автодром и город. Вождение в
						городе проходит по 4 учебным маршрутам - БАМ, Вторая речка, Чуркин и
						Нейбута. Среди учебных автомобилей в автошколе ДРАЙВИНГСКУЛ - модели
						с левосторонним расположением руля, например: Toyota Prius, Hyundai
						Solaris, Kia Rio И другие.
					</p>
        
				</div>
			</div>

		</div>
	)
}

export default Abuot
